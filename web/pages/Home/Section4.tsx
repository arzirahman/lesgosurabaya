import background from '../../assets/images/home/section4/background.png';

export default function Section4() {
    return (
        <div className="text-white bg-[#0C2A74] p-[50px] flex flex-col items-center font-extrabold text-[80px] leading-[76px] relative">
            <span className="mb-6">Tell your story with</span>
            <span className="mb-[60px]">LESGOSURABAYA</span>
            <button className="text-black bg-white w-[351px] h-[86px] rounded-[20px] font-bold text-[40px] leading-[76px] cursor-pointer">
                Learn more
            </button>
            <img alt='lesgosurabaya' src={background} className='absolute bottom-0 h-[370px] right-[30px]' />
        </div>
    )
}