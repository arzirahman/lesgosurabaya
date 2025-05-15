import { useEffect, useState } from "react";
import { request } from "../../utils/request";
import Cookies from 'js-cookie';
import { Link, useLocation } from "react-router-dom";

export interface IExploreCard {
    image?: string;
    name?: string;
    location?: string;
    imageClassName?: string;
    detail?: boolean;
}

export default function ExploreCard({ image, name, location, imageClassName, detail }: Readonly<IExploreCard>) {
    const [isLoading, setIsLoading] = useState(true);
    const [like, setLike] = useState(false);
    const [favourite, setFavourite] = useState(false);
    const loc = useLocation();

    const toggleLike = async () => {
        const token = Cookies.get('lesgosurabaya') ?? null;
        if (!token || !image) return;
        setLike(!like);
        try {
            await request({ noLoading: true }).post("/like", {
                post: name,
                image
            });
        } catch (error: unknown) {
            setLike(!like);
        }
    };

    const toggleFavourite = async () => {
        const token = Cookies.get('lesgosurabaya') ?? null;
        if (!token || !image) return;
        setFavourite(!favourite);
        try {
            await request({ noLoading: true }).post("/favourite", {
                post: name,
                image
            });
        } catch (error: unknown) {
            setFavourite(!favourite);
        }
    };

    useEffect(() => {
        const getLike = async () => {
            const token = Cookies.get('lesgosurabaya') ?? null;
            if (!token || !image) return;
            try {
                const response = await request().post("/is-like", {
                    post: name
                });
                setLike(response.data.data.like);
            } catch (error: unknown) { }
        }

        getLike();
    }, []);

    useEffect(() => {
        const getFavourite = async () => {
            const token = Cookies.get('lesgosurabaya') ?? null;
            if (!token || !image) return;
            try {
                const response = await request().post("/is-favourite", {
                    post: name
                });
                setFavourite(response.data.data.favourite);
            } catch (error: unknown) { }
        }

        getFavourite();
    }, [])

    return (
        <div>
            <Link to={detail ? `/explore/detail/${name}` : (loc.pathname + loc.search)} className="flex flex-col flex-1 gap-[20px] cursor-pointer group">
                <div className="rounded-[20px] h-[365px] w-full flex justify-end relative overflow-hidden bg-[#CFCFCF]">
                    {isLoading && image && (
                        <div className="absolute w-full h-full bg-[#CFCFCF] animate-pulse" />
                    )}
                    {image && <img
                        alt=""
                        src={image}
                        className={`${imageClassName ?? 'absolute w-full h-full object-cover object-center'} group-hover:scale-110 ease-in-out transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                        onLoad={() => setIsLoading(false)}
                        onError={() => setIsLoading(false)}
                    />}
                    <div className={`flex flex-col items-end gap-[16px] p-[20px] text-white z-[1] w-full h-full ${image && !isLoading ? 'bg-gradient-to-bl from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0)]' : ''}`}>
                        <button onClick={toggleFavourite} className={`${favourite ? 'text-[#FFFF07]' : ''} mr-[2px] cursor-pointer`}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 0C6.72903 0 0 6.72876 0 14.9994C0 23.2706 6.72903 30 15 30C23.271 30 30 23.2706 30 14.9994C30.0006 6.72876 23.2716 0 15 0ZM23.2879 13.9028L18.9455 17.0452L20.6179 22.1565C20.6445 22.2363 20.6584 22.3215 20.6584 22.4085C20.6584 22.855 20.2971 23.2175 19.8506 23.2175C19.6729 23.2175 19.5098 23.1607 19.3769 23.0646L15.0006 19.8993L10.6243 23.0646C10.4914 23.1607 10.3283 23.2175 10.1513 23.2175C9.70414 23.2175 9.34222 22.8556 9.34222 22.4085C9.34222 22.3209 9.35672 22.2363 9.38331 22.1565L11.0564 17.0452L6.71393 13.9034C6.51092 13.7572 6.3792 13.5179 6.3792 13.2485C6.3792 12.802 6.74051 12.4407 7.18763 12.4407H12.5632L14.2278 7.35288C14.3293 7.02239 14.6369 6.78193 15.0012 6.78193C15.3649 6.78193 15.6731 7.02239 15.774 7.35288L17.4386 12.4407H22.8142C23.2607 12.4407 23.6226 12.802 23.6226 13.2485C23.622 13.5179 23.4903 13.7566 23.2879 13.9028Z" fill="currentColor" />
                            </svg>
                        </button>
                        <button onClick={toggleLike} className={`${like ? 'text-[#FF0A0A]' : ''} cursor-pointer`}>
                            <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.6028 2.05129C27.8567 -1.07588 22.2856 -0.513393 18.8472 2.96199L17.5005 4.32134L16.1538 2.96199C12.7223 -0.513393 7.14426 -1.07588 3.39823 2.05129C-0.894652 5.64051 -1.12023 12.0824 2.72149 15.9729L15.9488 29.3521C16.8033 30.216 18.1909 30.216 19.0454 29.3521L32.2727 15.9729C36.1212 12.0824 35.8957 5.64051 31.6028 2.05129Z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-bold text-2xl text-center">{name}</span>
                    <span className="font-semibold text-sm text-center">{location}</span>
                </div>
            </Link>
        </div>
    )
}