import background from '../../assets/images/home/section2/background.png';

export default function Section1() {
    return (
        <div className='w-full pr-[100px]'>
            <div className="flex items-center gap-5 w-full mx-auto max-w-[1440px]">
                <div className='min-w-[430px] max-w-[430px] min-h-[550px] max-h-[550px] overflow-hidden'>
                    <img alt="Lesgosurabaya" className='min-w-[430px]' src={background} />
                </div>
                <div className="flex flex-col">
                    <span className="font-extrabold text-[70px] leading-[76px]">
                        ABOUT
                    </span>
                    <span className="font-extrabold text-[70px] leading-[76px] mb-8">
                        LESGOSURABAYA
                    </span>
                    <span className="font-medium text-xl text-[#060606] mb-7">
                        Welcome to LesGoSurabaya, a media platform dedicated to showcasing the best of Surabaya. We aim to highlight and promote the city’s most interesting aspects from culinary delights, local businesses (UMKM), and exciting events, to tourist attractions and hidden stories tucked away in every corner of Surabaya.
                    </span>
                    <span className="font-medium text-xl text-[#060606]">
                        What started as a passion on social media has grown into a trusted local guide through engaging short-form videos and honest reviews. Whether it's legendary street food, cozy cafes, vibrant markets, or inspiring local stories, LesGoSurabaya is here to help you experience Surabaya in the most authentic way.
                    </span>
                </div>
            </div>
        </div>
    )
}