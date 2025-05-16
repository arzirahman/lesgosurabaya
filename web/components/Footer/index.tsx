import logo from '../../assets/images/home/section5/logo.png';
import background from '../../assets/images/home/section2/background.png';
import { Link } from 'react-router-dom';

interface IFooter {
    iconClassname?: string;
}

export default function Footer({ iconClassname }: Readonly<IFooter>) {
    return (
        <div className='w-full bg-[#DAD8D8] rounded-t-[50px] items-center justify-center pt-[20px] pb-[30px] flex flex-col'>
            <div className='flex gap-10 justify-between items-center relative w-full max-w-[1440px] px-[40px]'>
                <img alt='Lesgosurabaya' src={background} className={`${iconClassname ?? 'w-[1100px] absolute bottom-[-90px] right-[-150px] z-[-1]'}`} />
                <img alt='Lesgosurabaya' src={logo} className='h-[80px]' />
                <div className='flex gap-[80px] font-bold text-[15px]'>
                    <Link to={'/explore/tourism'}>TOURISM</Link>
                    <Link to={'/explore/umkm'}>UMKM</Link>
                    <Link to={'/explore/hospitality'}>HOSPITALITY</Link>
                    <Link to={'/explore/lifestyle'}>LIFESTYLE</Link>
                </div>
            </div>
            <div className='flex flex-col font-semibold text-[15px] w-full max-w-[1440px] px-[40px] mb-[20px]'>
                <span>Wonorejo Selatan no.17, Surabaya, Jawa Timur, Indonesia (60296)</span>
                <span>+62 819 3983 9007</span>
            </div>
            <div className='w-full max-w-[1440px] px-[40px] mx-auto'>
                <div className='h-[1px] w-full bg-black'></div>
            </div>
            <div className='w-full max-w-[1440px] px-[40px] mx-auto'>
                <span className='font-semibold text-[15px]'>© 2025 LesGoSurabaya</span>
            </div>
        </div>
    )
}