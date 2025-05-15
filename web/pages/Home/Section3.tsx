import { Link } from 'react-router-dom';
import background from '../../assets/images/home/section3/background.png';

import Accordion, { IAccordion } from '../../components/Accordion';

export default function Section3() {
    const accordion: IAccordion[] = [
        {
            name: 'Yu-I Kitchen',
            image: '/images/event/7.png',
            location: 'Event Kepo Asian Culinary Vol. 2, Atrium Galaxy Mall',
            date: '18 - 23 February 2025'
        },
        {
            name: 'XPLORA World Tour & Travel',
            image: '/images/event/4.png',
            location: 'Event ASTINDO OCBC Holiyaay Travel Fair 2025, Grand Atrium Pakuwon Mall',
            date: '20 - 23 February 2025'
        },
        {
            name: 'Home Sweet Home',
            image: '/images/event/5.png',
            location: 'Main Atrium LG Floor, PTC, Surabaya',
            date: '7 - 16 March 2025',
            defaultChecked: true
        },
        {
            name: 'ISCLF',
            image: '/images/event/2.png',
            location: 'Main Atrium Level Ground, Grand City Mall Surabaya',
            date: '5 - 6 February 2025'
        },
        {
            name: 'Majestic Lunar Wonders',
            image: '/images/event/3.png',
            location: 'Atrium Tunjungan Plaza 6, Surabaya',
            date: '17 January - 24 February 2025'
        },
        {
            name: 'Dessert Days',
            image: '/images/event/1.png',
            location: 'Main Atrium LG, PTC, Surabaya',
            date: '26 February - 2 March 2025'
        },
        {
            name: 'Kaka Jeweluxe',
            image: '/images/event/6.png',
            location: 'Event Project X Market, Tunjungan Plaza 3, Luv 6',
            date: '21 - 23 Maret 2025'
        },
    ]

    return (
        <div className='w-full relative'>
            <div className="w-full px-[17px] pb-[27px] pt-20 max-w-[1440px] mx-auto">
                <div className='flex flex-col gap-[70px]'>
                    <div className='flex gap-[55px] mx-auto items-center'>
                        <span className='font-extrabold text-[80px] leading-[76px] text-shadow-lg'>Event & Bazar</span>
                        <Link to={'/event'} className='flex rounded-[20px] gap-3 ml-6 px-4 py-3 items-center border-[3px] w-[420px] justify-between h-[69px] border-black font-bold text-2xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 active:scale-100'>
                            Explore all Event
                            <svg width="27" height="12" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.169 6H1.68512" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.169 6L21.5561 11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.169 6L21.5561 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                    <div className='flex gap-[31px]'>
                        {accordion.map((item, index) => (
                            <Accordion key={item.name} {...item} id={'accordion' + index} />
                        ))}
                    </div>
                </div>
            </div>
            <img alt='lesgosurabaya' src={background} className='absolute inset-0 w-full h-full object-cover object-top z-[-1]' />
            <div className='absolute inset-0 w-full h-full bg-[rgba(255,255,255,0.3)] z-[-1]'></div>
        </div>
    )
}