import { useEffect, useRef, useState } from "react"
import Cookies from 'js-cookie';
import { request } from "../../utils/request";
import background from '../../assets/images/home/section2/background.png';
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Profile() {
    const [isFavourite, setIsFavourite] = useState(true);
    const [data, setData] = useState<any>();
    const [profile, setProfile] = useState<string>();
    const navigate = useNavigate();
    const loc = useLocation();
    const [showAvatars, setShowAvatars] = useState(false);
    const avatarRef = useRef<HTMLDivElement>(null);
    const avatarEditRef = useRef<HTMLButtonElement>(null);
    const [name, setName] = useState('');

    useEffect(() => {
        const getFavouriteAndLike = async () => {
            const token = Cookies.get('lesgosurabaya') ?? null;
            if (!token) return;
            try {
                const response = await request().get("/favourite-and-like");
                setData(response.data.data);
                setName(response.data.data?.user?.name ?? '');
            } catch (error: unknown) { }
        }

        getFavouriteAndLike();
    }, []);

    useEffect(() => {
        const token = Cookies.get('lesgosurabaya') ?? null;

        if (!profile && token) {
            fetchImage();
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                avatarRef.current &&
                !avatarRef.current.contains(event.target as Node) &&
                avatarEditRef.current &&
                !avatarEditRef.current.contains(event.target as Node)
            ) {
                setShowAvatars(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const fetchImage = async () => {
        const token = Cookies.get('lesgosurabaya') ?? null;

        const response = await fetch((import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000/api') + '/profile', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        const data = await response.json();
        setProfile(data.data.profile);
    };

    const logout = () => {
        Cookies.remove('lesgosurabaya', {
            expires: 30,
            path: '/',
            domain: import.meta.env.VITE_COOKIE_DOMAIN,
            secure: import.meta.env.VITE_COOKIE_SECURE === 'true',
            sameSite: 'Lax'
        });
        navigate('/');
    }

    const getLink = (name: string, detail: boolean, isEvent: boolean) => {
        if (detail) {
            if (isEvent) {
                return `/event/${name}`;
            } else {
                return `/explore/detail/${name}`;
            }
        }
        return loc.pathname + loc.search
    }

    const changeAvatar = async (src: string) => {
        setProfile(src);
        try {
            await request({ noLoading: true }).post("/change-avatar", { avatar: src });
        } catch (error) { }
    }

    const changeName = async (name: string) => {
        setName(name);
        if (name) {
            try {
                await request({ noLoading: true }).post("/change-name", { name });
            } catch (error) { }
        }
    }

    return (
        <div className="w-full pt-[100px] min-h-[100svh] relative">
            <div className="w-full max-w-[1440px] mx-auto py-[40px] px-[40px] flex flex-col h-full relative">
                <div className="flex justify-between gap-[40px] items-center">
                    <div className="flex w-[748px] items-center relative py-[40px] mb-[40px]">
                        <div className="bg-[#D9D9D9] flex flex-col rounded-[20px] px-[90px] py-[16px] w-[633px]">
                            <div className="font-extrabold text-[48px] leading-[76px] max-w-[400px] flex">
                                <span>Hi,</span>
                                <input
                                    value={name}
                                    onChange={(e) => changeName(e.target.value)}
                                    className="w-full pl-[12px] outline-none text-ellipsis text-nowrap border-b-transparent cursor-pointer border-b-[2px] border-transparent focus:border-black focus:cursor-text transition-all duration-300"
                                />
                            </div>
                            <span className="font-semibold text-2xl">Ready to explore Surabaya?</span>
                        </div>

                        <div className="absolute right-0 rounded-full w-[230px] h-[230px] overflow-hidden bg-[#cccccc]">
                            <img alt="Name" src={profile} className="w-[270px] h-[270px] absolute top-[-25px] object-cover object-center" />
                        </div>

                        <button ref={avatarEditRef} onClick={() => setShowAvatars(prev => !prev)} className="w-[35px] z-[1] h-[35px] shadow-md bg-white rounded-full absolute bottom-[27px] right-[160px] flex items-center justify-center cursor-pointer">
                            <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                        </button>

                        <div ref={avatarRef} className={`${showAvatars ? 'h-[210px]' : 'h-0'} transition-all duration-300 overflow-hidden grid grid-cols-3 absolute top-[200px] right-0`}>
                            {(new Array(9)).fill('Avatar.Select').map((item, i) => (
                                <button onClick={() => { changeAvatar(`/images/avatar/${i + 1}.svg`) }} key={`${item}${i}`} className="cursor-pointer h-[70px] w-[70px]">
                                    <img className="w-full h-full" alt="" src={`/images/avatar/${i + 1}.svg`} />
                                </button>
                            ))}
                        </div>
                    </div>
                    <button onClick={logout} className="cursor-pointer rounded-[12px] p-[12px] bg-[#D9D9D9] z-[1] translate-y-[-50px] translate-x-[-20px]">
                        <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6317 39.5789H9.26331C8.2862 39.5789 7.34911 39.1908 6.65818 38.4999C5.96726 37.8089 5.5791 36.8718 5.5791 35.8947V10.1053C5.5791 9.12815 5.96726 8.19105 6.65818 7.50013C7.34911 6.80921 8.2862 6.42105 9.26331 6.42105H16.6317" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M29.5264 32.2105L38.7369 23L29.5264 13.7895" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M38.7371 23H16.6318" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <img alt="lesgosurabaya" className="absolute right-0 top-0 w-[600px]" src={background} />
            </div>
            <div className="flex flex-col gap-[40px] pb-[40px]">
                <div className="flex font-semibold text-2xl gap-[80px] pl-[calc(((100%-1440px)/2)+40px)]">
                    <button onClick={() => { setIsFavourite(true) }} className={`${isFavourite ? 'bg-[#0C2A74] text-white' : ''} cursor-pointer rounded-[10px] p-2`}>Favourite</button>
                    <button onClick={() => { setIsFavourite(false) }} className={`${!isFavourite ? 'bg-[#0C2A74] text-white' : ''} cursor-pointer rounded-[10px] p-2`}>Like</button>
                </div>
                <div className="flex gap-[40px] overflow-x-scroll px-[calc(((100%-1440px)/2)+40px)] no-scrollbar">
                    {
                        isFavourite
                            ? data?.favourite?.map((favourite: any) => (
                                <Link to={getLink(favourite.post, favourite.hasDetail, favourite.isEvent)} key={`profile-${favourite?.id}`} className="group rounded-[20px] max-w-[310px] min-w-[310px] h-[365px] bg-[#CDCDCD] relative overflow-hidden">
                                    {favourite?.image && <img alt={`profile-${favourite?.id}`} src={favourite?.image} className="w-full h-full object-cover object-center group-hover:scale-110 ease-in-out transition-all duration-500" />}
                                </Link>
                            ))
                            : data?.like?.map((like: any) => (
                                <Link to={getLink(like.post, like.hasDetail, like.isEvent)} key={`profile-${like?.id}`} className="group rounded-[20px] max-w-[310px] min-w-[310px] h-[365px] bg-[#CDCDCD] relative overflow-hidden">
                                    {like?.image && <img alt={`profile-${like?.id}`} src={like?.image} className="w-full h-full object-cover object-center group-hover:scale-110 ease-in-out transition-all duration-500" />}
                                </Link>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}