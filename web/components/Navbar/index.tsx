import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { useRef, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Navbar() {
    const exploreDropdownRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [token, setToken] = useState(Cookies.get('lesgosurabaya') ?? null);
    const [profile, setProfile] = useState<string>();
    const location = useLocation();
    const explore = [
        {
            name: 'Tourism',
            path: '/explore/tourism'
        },
        {
            name: 'UMKM',
            path: '/explore/umkm'
        },
        {
            name: 'Hospitality',
            path: '/explore/hospitality'
        },
        {
            name: 'Lifestyle',
            path: '/explore/lifestyle'
        },
    ];

    useEffect(() => {
        const token = Cookies.get('lesgosurabaya') ?? null;
        setToken(token);

        const fetchImage = async () => {
            const response = await fetch((import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000/api') + '/profile', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            const data = await response.json();
            setProfile(data.data.profile);
        };

        if (!profile && token) {
            fetchImage();
        }
    }, [location.pathname, location.search]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (exploreDropdownRef.current && !exploreDropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className='fixed inset-0 h-[100px] z-10 w-full bg-[rgba(0,0,0,0.8)] rounded-b-[40px]'>
            <div className='w-full max-w-[1440px] mx-auto flex justify-between items-center'>
                <Link to={'/'} className='pb-6 pt-4 px-10'>
                    <img alt='Lesgosurabaya' src={Logo} />
                </Link>
                <div className='flex text-white font-semibold text-xl gap-36'>
                    <div ref={exploreDropdownRef} className='flex flex-col relative'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='flex items-center gap-2 cursor-pointer'
                        >
                            Explore
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_299_1184)">
                                    <path d="M7.75425 8.73045L3.05027 4.23027C2.89154 4.07728 2.81533 3.88039 2.83831 3.6827C2.86129 3.48501 2.9816 3.30263 3.1729 3.17551C3.36419 3.04839 3.61087 2.98689 3.85893 3.00446C4.10699 3.02204 4.3362 3.11727 4.49637 3.26929L8.47733 7.07804L12.4583 3.26929C12.6182 3.11668 12.8476 3.02093 13.0961 3.00307C13.3445 2.9852 13.5917 3.04669 13.7833 3.17403C13.9749 3.30136 14.0953 3.48412 14.118 3.68217C14.1407 3.88022 14.0639 4.07735 13.9044 4.23027L9.20034 8.73045C9.11191 8.81484 9.00133 8.88271 8.87639 8.92929C8.75146 8.97586 8.61522 9 8.47729 9C8.33937 9 8.20313 8.97586 8.0782 8.92929C7.95326 8.88271 7.84267 8.81484 7.75425 8.73045Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_299_1184">
                                        <rect width="12" height="15.0521" fill="white" transform="matrix(-4.38631e-08 1 1 4.35602e-08 0.951416 0)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <div
                            className={`bg-white absolute top-full left-[30px] ml-[-14px] rounded-[20px] text-black mt-2 overflow-hidden transition-all duration-100 shadow-lg ${isOpen ? 'max-h-[250px]' : 'max-h-0'
                                }`}
                        >
                            <div className='flex flex-col py-[10px] px-[7px] gap-1'>
                                {explore.map((item) => (
                                    <Link onClick={() => setIsOpen(false)} key={'link.explore.' + item.name} to={item.path} className='w-[142px] h-[34px] cursor-pointer text-center'>{item.name}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Link to={'/event'}>Event</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                </div>
                <div className='flex items-center gap-7 px-20'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path d="M27.919 24.586L22.8243 19.509C23.877 17.928 24.4931 16.035 24.4931 14C24.4931 8.486 19.9915 4 14.4583 4C8.92517 4 4.42358 8.486 4.42358 14C4.42358 19.514 8.92517 24 14.4583 24C16.5004 24 18.4 23.386 19.9865 22.337L25.0811 27.414C25.8638 28.195 27.1362 28.195 27.919 27.414C28.7027 26.633 28.7027 25.367 27.919 24.586ZM7.43401 14C7.43401 10.14 10.5849 7 14.4583 7C18.3317 7 21.4827 10.14 21.4827 14C21.4827 17.86 18.3317 21 14.4583 21C10.5849 21 7.43401 17.86 7.43401 14Z" fill="white" />
                        </svg>
                    </button>
                    <Link to={token ? '/profile' : '/sign-up'} className='cursor-pointer w-[33px] h-[33px] overflow-hidden rounded-full'>
                        {token ? (
                            <img alt='' src={profile} className='w-full h-full object-cover object-center' />
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="37" viewBox="0 0 33 37" fill="none">
                                <path d="M16.6667 18.4345C19.6224 18.4345 22.0185 15.8114 22.0185 12.5756C22.0185 9.33981 19.6224 6.71669 16.6667 6.71669C13.7109 6.71669 11.3148 9.33981 11.3148 12.5756C11.3148 15.8114 13.7109 18.4345 16.6667 18.4345Z" fill="white" />
                                <path d="M27.3703 28.6876V30.1523C27.3703 30.5408 27.2293 30.9133 26.9784 31.188C26.7275 31.4627 26.3872 31.617 26.0323 31.617H7.30085C6.946 31.617 6.60569 31.4627 6.35477 31.188C6.10385 30.9133 5.96289 30.5408 5.96289 30.1523V28.6876C5.96289 26.3568 6.80867 24.1214 8.31417 22.4733C9.81967 20.8251 11.8616 19.8992 13.9907 19.8992H19.3425C21.4716 19.8992 23.5135 20.8251 25.019 22.4733C26.5245 24.1214 27.3703 26.3568 27.3703 28.6876Z" fill="white" />
                            </svg>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
