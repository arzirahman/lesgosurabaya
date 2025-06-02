import pen from '../../assets/images/pen.png'
import location from '../../assets/images/location.png'
import person from '../../assets/images/person.png'
import Footer from '../../components/Footer'
import { useEffect } from 'react'

export default function LearnMore() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className="w-full pt-[180px]">
            <div className="w-full max-w-[1520px] mx-auto flex gap-[20px] items-center mb-[60px]">
                <div className="flex-1 flex flex-col pl-[120px] gap-[25px]">
                    <span className="font-extrabold text-[80px] leading-[90px]">Scope Of Work</span>
                    <div className="flex flex-col text-xl">
                        <span className="font-bold">Content Research and Planning</span>
                        <span className="font-medium">Analysis of target audience and content strategy.</span>
                    </div>
                    <div className="flex flex-col text-xl">
                        <span className="font-bold">Content Production</span>
                        <span className="font-medium">Creation of videos, photos, and articles according to the selected package</span>
                    </div>
                    <div className="flex flex-col text-xl">
                        <span className="font-bold">Content Promotion</span>
                        <span className="font-medium">Publishing content on the LesGoSurabaya platform and promoting it through Instagram Stories and Feed</span>
                    </div>
                </div>
                <div className="w-[820px] h-[552px]">
                    <img alt="scope" src="/images/learn-more/scope.png" className="w-full h-full object-cover object-center" />
                </div>
            </div>
            <div className="flex flex-col pt-[45px] w-full bg-[#F5F5F5] items-center mb-[120px] h-[360px]">
                <span className="font-extrabold text-[80px] leading-[90px]">Why Choose Us?</span>
                <div className="flex gap-[34px] translate-y-[30px]">
                    <div className="rounded-[20px] bg-white w-[386px] p-5 flex flex-col items-center shadow-lg">
                        <img alt='' src={pen} />
                        <div className="flex flex-col text-xl items-center gap-1">
                            <span className="font-bold text-center">Content Research and Planning</span>
                            <span className="font-medium text-center">Analysis of target audience and content strategy.</span>
                        </div>
                    </div>
                    <div className="rounded-[20px] bg-[#0C2A74] text-white w-[386px] p-5 flex flex-col items-center shadow-lg">
                        <img alt='' src={location} />
                        <div className="flex flex-col text-xl items-center gap-1">
                            <span className="font-bold text-center">Focus On Surabaya</span>
                            <span className="font-medium text-center">Our Specialization in Surabaya ensures that every content is relevant and useful.</span>
                        </div>
                    </div>
                    <div className="rounded-[20px] bg-white w-[386px] p-5 flex flex-col items-center shadow-lg">
                        <img alt='' src={person} />
                        <div className="flex flex-col text-xl items-center gap-1">
                            <span className="font-bold text-center">High Engagement</span>
                            <span className="font-medium text-center">We Build an active community that regularly interacts with the content.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-[65px] px-[70px] w-full max-w-[1440px] mx-auto mb-[61px] items-center'>
                <div className='w-[595px] h-[461px]'>
                    <img alt="scope" src="/images/learn-more/form.png" className="w-full h-full object-cover object-center" />
                </div>
                <div className='flex flex-col gap-[36px] flex-1'>
                    <span className='font-semibold text-2xl'>Thank you for your interest in collaborating with LesGoSurabaya! Please fill out this form completely. Our team will get back to you within 2–3 business days after receiving your submission.</span>
                    <a href='https://forms.gle/jbzPymWYHqXVAUuV6' target='__blank' className='w-[200px] flex justify-center items-center h-[76px] rounded-[20px] text-white bg-[#0C2A74] text-center underline font-bold text-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 active:scale-100'>Google Form</a>
                </div>
            </div>
            <Footer iconClassname='w-[1030px] absolute bottom-[-50px] right-[-50px] z-[-1]' />
        </div>
    )
}