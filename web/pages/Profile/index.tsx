import { useEffect, useState } from "react"
import Cookies from 'js-cookie';
import { request } from "../../utils/request";
import background from '../../assets/images/home/section2/background.png';
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [isFavourite, setIsFavourite] = useState(true);
    const [data, setData] = useState<any>();
    const [profile, setProfile] = useState<string>();
    const navigate = useNavigate();

    useEffect(() => {
        const getFavouriteAndLike = async () => {
            const token = Cookies.get('lesgosurabaya') ?? null;
            if (!token) return;
            try {
                const response = await request().get("/favourite-and-like");
                setData(response.data.data);
            } catch (error: unknown) { }
        }

        getFavouriteAndLike();
    }, []);

    useEffect(() => {
        const token = Cookies.get('lesgosurabaya') ?? null;

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
    }, [])

    const logout = () => {
        Cookies.remove('lesgosurabaya');
        navigate('/');
    }

    return (
        <div className="w-full pt-[100px] min-h-[100svh] relative">
            <div className="w-full max-w-[1440px] mx-auto py-[40px] px-[40px] flex flex-col h-full relative">
                <div className="flex justify-between gap-[40px] items-center">
                    <div className="flex w-[748px] items-center relative py-[40px] mb-[40px]">
                        <div className="bg-[#D9D9D9] flex flex-col rounded-[20px] px-[90px] py-[16px] w-[633px]">
                            <span className="font-extrabold text-[48px] leading-[76px] max-w-[400px] overflow-hidden text-ellipsis whitespace-nowrap">Hi, {data?.user?.name}</span>
                            <span className="font-semibold text-2xl">Ready to explore Surabaya?</span>
                        </div>

                        <div className="absolute right-0 rounded-full w-[230px] h-[230px] overflow-hidden bg-[#cccccc]">
                            <img alt="Name" src={profile} className="w-full h-full object-cover object-center" />
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
                                <div key={`profile-${favourite?.id}`} className="rounded-[20px] max-w-[310px] min-w-[310px] h-[365px] bg-[#CDCDCD] relative overflow-hidden">
                                    {favourite?.image && <img alt={`profile-${favourite?.id}`} src={favourite?.image} className="w-full h-full object-cover object-center" />}
                                </div>
                            ))
                            : data?.like?.map((like: any) => (
                                <div key={`profile-${like?.id}`} className="rounded-[20px] max-w-[310px] min-w-[310px] h-[365px] bg-[#CDCDCD] relative overflow-hidden">
                                    {like?.image && <img alt={`profile-${like?.id}`} src={like?.image} className="w-full h-full object-cover object-center" />}
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}