import { Link } from "react-router-dom";

interface ILocationCard {
    image: string;
    location: string;
    name: string;
    path: string;
}

export default function LocationCard({ name, image, location, path }: Readonly<ILocationCard>) {
    return (
        <Link to={path} className="rounded-[20px] w-[310px] h-[577px] overflow-hidden relative text-white">
            <img alt="Kedai Do'a Ibu" src={image} className="w-full h-full object-cover object-center" />
            <div className="absolute flex flex-col left-4 bottom-5">
                <span className="font-extrabold text-2xl">{name}</span>
                <div className="flex gap-[6px] items-center">
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.20238 0C3.1897 0 0.746033 2.03775 0.746033 4.55C0.746033 7.9625 6.20238 13 6.20238 13C6.20238 13 11.6587 7.9625 11.6587 4.55C11.6587 2.03775 9.21507 0 6.20238 0ZM6.20238 6.175C5.1267 6.175 4.25369 5.447 4.25369 4.55C4.25369 3.653 5.1267 2.925 6.20238 2.925C7.27806 2.925 8.15108 3.653 8.15108 4.55C8.15108 5.447 7.27806 6.175 6.20238 6.175Z" fill="white" />
                    </svg>
                    <span className="font-semibold text-sm">{location}</span>
                </div>
            </div>
        </Link>
    )
}