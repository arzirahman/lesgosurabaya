import wisata from '../../assets/images/Explore/wisata.jpg';
import hospital from '../../assets/images/Explore/hospital.png';
import lifestyle from '../../assets/images/Explore/lifestyle.png';
import umkm from '../../assets/images/Explore/umkm.png';
import background from '../../assets/images/home/section2/background.png';
import { Link } from 'react-router-dom';

export default function Explore() {
    const explore = [
        {
            image: wisata,
            name: 'Tourism',
            path: '/explore/tourism'
        },
        {
            image: umkm,
            name: 'UMKM',
            path: '/explore/umkm'
        },
        {
            image: hospital,
            name: 'Hospitality',
            path: '/explore/hospitality'
        },
        {
            image: lifestyle,
            name: 'Lifestyle',
            path: '/explore/lifestyle'
        }
    ]
    return (
        <div className="w-full pt-[100px] h-[100svh]">
            <div className="w-full max-w-[1440px] h-full mx-auto flex flex-col py-[60px] px-[70px] gap-8 relative overflow-hidden">
                <span className="font-extrabold text-[70px] leading-[76px] mx-auto">
                    Lorem Ipsum
                </span>
                <div className="grid grid-cols-2 gap-x-5 gap-y-[33px] flex-1 text-white font-semibold text-[40px] leading-[76px]">
                    {explore.map((item) => (
                        <Link key={'explore.'+item.name} to={item.path} className="flex-1 rounded-[20px] relative flex items-center justify-center cursor-pointer overflow-hidden">
                            <img alt='Tourism' src={item.image} className='absolute object-cover w-full h-full object-center' />
                            <div className="w-[460px] rounded-[10px] bg-[rgba(0,0,0,0.18)] z-[1] text-center">{item.name}</div>
                        </Link>
                    ))}
                </div>
                <img alt='Lesgosurabaya' src={background} className='w-[600px] absolute bottom-[-290px] right-[20px] z-[-1]' />
            </div>
        </div>
    )
}