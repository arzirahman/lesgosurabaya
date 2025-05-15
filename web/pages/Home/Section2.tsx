import wibajul from '../../assets/images/home/section2/wibajul.png';
import doaIbu from '../../assets/images/home/section2/doa-ibu.png';
import background from '../../assets/images/home/section2/background.png';

import LocationCard from '../../components/LocationCard';
import { Link } from 'react-router-dom';

export default function Section2() {
    return (
        <div className='w-full p-20'>
            <div className="flex items-center gap-[50px] max-w-[1440px] mx-auto relative">
                <div className="flex gap-5">
                    <LocationCard path='/explore/detail/WIBAJUL' name='Wibajul' image={wibajul} location='Jl. Ngagel Jaya Tengah No.96, Surabaya TImur' />
                    <LocationCard path="/explore/detail/Kedai Doa Ibu" name="Kedai Do'a Ibu" image={doaIbu} location='Jl. Kaliwaron No. 60, Mojo, Surabaya' />
                </div>
                <div className='text-black flex flex-col'>
                    <span className='mb-[17px] font-bold text-[64px] leading-[76px] text-shadow-lg'>Discover Unique UMKM in Surabaya</span>
                    <span className='font-semibold text-xl mb-[72px]'>Explore Surabaya's creative side through its unique UMKM - from handmade crafts to flavorful local treats, all with personal touch</span>
                    <Link to={'/explore/umkm'} className='flex rounded-[20px] gap-3 ml-6 px-4 py-3 h-[69px] items-center border-[3px] border-black font-bold text-2xl max-w-[540px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 active:scale-100'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.91998 16H28.92" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.91998 16L6.91998 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.91998 16L6.91998 11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Discover unique UMKM in Surabaya
                    </Link>
                </div>
                <img className='absolute bottom-[-130px] left-[650px] z-[-1] h-[580px]' alt='Lesgosurabaya' src={background} />
            </div>
        </div>
    )
}