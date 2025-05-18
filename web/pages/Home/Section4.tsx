import { Link } from 'react-router-dom';
import background from '../../assets/images/home/section4/background.png';
import overlay from '../../assets/images/home/section4/overlay.png';

export default function Section4() {
    return (
        <div className="text-white p-[50px] flex flex-col items-center font-extrabold text-[80px] leading-[76px] relative">
            <img alt='' src={overlay} className='absolute w-full h-full object-cover object-center top-0 z-[-1]' />
            <span className="mb-6">Tell your story with</span>
            <span className="mb-[60px]">LESGOSURABAYA</span>
            <Link to={'/learn-more'} className="text-black text-center bg-white w-[300px] px-6 py-3 rounded-[20px] font-bold text-4xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 active:scale-100">
                Learn more
            </Link>
            <div className='w-full max-w-[1440px] mx-auto relative'>
                <img alt='lesgosurabaya' src={background} className='absolute bottom-[-50px] h-[370px] right-0' />
            </div>
        </div>
    )
}