import { Link } from 'react-router-dom';
import background from '../../assets/images/home/section1/background.png';

import image1 from '../../assets/images/home/section1/1.png';
import image2 from '../../assets/images/home/section1/2.jpg';
import image3 from '../../assets/images/home/section1/3.jpg';
import image4 from '../../assets/images/home/section1/4.png';
import image5 from '../../assets/images/home/section1/5.png';
import image6 from '../../assets/images/home/section1/6.png';

export default function Section1() {
    const carousels = [
        { key: 'home.carousel.1', image: image1, name: 'The Ramoe' },
        { key: 'home.carousel.2', image: image2, name: 'Drift.inc' },
        { key: 'home.carousel.3', image: image3, name: 'Yoga Fit' },
        { key: 'home.carousel.4', image: image4, name: 'Mie Babat Jembatan Asli' },
        { key: 'home.carousel.5', image: image5, name: 'WIBAJUL' },
        { key: 'home.carousel.6', image: image6, name: 'BYEBELI' },
    ];

    return (
        <div className="w-full h-[100svh] bg-[rgba(0,0,0,0.5)] pt-[100px] flex items-center relative overflow-hidden">
            <div className="text-white pl-home-section1 pr-[70px] flex flex-col gap-10 z-[1]">
                <div className="w-[500px] flex flex-col gap-4">
                    <span className="font-extrabold text-[80px] text-shadow-lg leading-[107%]">LESGO SURABAYA</span>
                    <span className="font-semibold text-xl">Explore the best of Surabaya's torism, Culinary delights, and Local Experiences all in one place !</span>
                </div>
                <Link to={'/explore'} className="rounded-[20px] bg-[#0C2A74] w-[272px] flex justify-between gap-4 font-bold text-4xl items-center px-6 py-3 shadow-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 active:scale-100">
                    Explore
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M29.08 16H3.08" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M29.08 16L25.08 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M29.08 16L25.08 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
            <div className="flex overflow-auto gap-[30px] pr-[70px] no-scrollbar z-[1]">
                {carousels.map((carousel) => (
                    <Link to={`/explore/detail/${carousel.name}`} key={carousel.key}  className="bg-[#D9D9D9] rounded-[20px] min-w-[310px] h-[477px] relative overflow-hidden group cursor-pointer">
                        <img alt='' src={carousel.image} className='absolute w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 ease-in-out' />
                    </Link>
                ))}
            </div>
            <img alt="Lesgosurabaya" src={background} className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className='absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.2)]'></div>
        </div>
    )
}
