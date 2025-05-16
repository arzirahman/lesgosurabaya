import { useEffect } from 'react';
import banner from '../../assets/images/contact/banner.jpg';
import Footer from '../../components/Footer';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col overflow-hidden">
            <div className="w-full min-h-[380px] relative font-extrabold text-[80px] leading-[76px] text-white">
                <img alt='Contact' src={banner} className='absolute object-cover object-center w-full h-full' />
                <div className='absolute inset-0 w-full h-full bg-[#000000C9] pt-[100px] flex items-center justify-center'>CONTACT US</div>
            </div>
            <div className='p-[70px] flex flex-col gap-[60px] w-full max-w-[1440px] mx-auto mb-[30px]'>
                <span className='text-center mx-auto font-bold text-[64px] leading-[76px]'>
                    Contact Information
                </span>
                <div className='flex gap-[120px] justify-center text-white'>
                    <div className='flex flex-col items-center justify-center gap-2 py-[25px] px-2 rounded-[20px] bg-[#0C2A74] w-[370px]'>
                        <span className='transition-all duration-300 ease-in-out hover:scale-110 active:scale-100'>
                            <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.5 59.8125C40.6912 59.8125 37.8824 58.8912 35.4865 57.0241L0 29.4305V67.9688C0 72.4717 3.65162 76.125 8.15625 76.125H78.8438C83.3484 76.125 87 72.4734 87 67.9688V29.4305L51.5203 57.0428C49.1244 58.8949 46.3037 59.8125 43.5 59.8125ZM2.76803 24.6896L38.8255 52.7437C41.5765 54.8848 45.4303 54.8848 48.1813 52.7437L84.2388 24.6896C85.8275 23.3303 87 21.2402 87 19.0312C87 14.5266 83.3467 10.875 78.8438 10.875H8.15625C3.65162 10.875 0 14.5266 0 19.0312C0 21.2402 1.02123 23.3303 2.76803 24.6896Z" fill="currentColor" />
                            </svg>
                        </span>
                        <span className='font-bold text-2xl'>Email Us</span>
                        <a href='mailto:lesgosurabaya@gmail.com' className='text-xl underline'>lesgosurabaya@gmail.com</a>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 py-[25px] px-2 rounded-[20px] bg-[#0C2A74] w-[370px]'>
                        <span className='transition-all duration-300 ease-in-out hover:scale-110 active:scale-100'>
                            <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_317_5002)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M46.6619 38.8829C45.8656 38.4844 41.951 36.5584 41.2211 36.2924C40.4914 36.0267 39.9606 35.8941 39.4297 36.6909C38.899 37.4879 37.373 39.2816 36.9085 39.8129C36.4441 40.3443 35.9796 40.4111 35.1835 40.0122C34.3872 39.6138 31.8216 38.7731 28.7804 36.0602C26.4135 33.9489 24.8154 31.3416 24.351 30.5444C23.8865 29.7473 24.3014 29.3164 24.7 28.9194C25.0584 28.5627 25.4964 27.9894 25.8944 27.5244C26.2926 27.0597 26.4252 26.7273 26.6906 26.1962C26.956 25.6647 26.8234 25.1998 26.6241 24.8013C26.4252 24.4028 24.8329 20.4836 24.1694 18.8891C23.523 17.3367 22.8666 17.5469 22.3779 17.5223C21.914 17.4993 21.3825 17.4944 20.8519 17.4944C20.3211 17.4944 19.4584 17.6937 18.7285 18.4906C17.9988 19.2877 15.9419 21.2142 15.9419 25.1331C15.9419 29.0524 18.7949 32.8383 19.193 33.3698C19.5911 33.9013 24.8075 41.9436 32.795 45.3924C34.6945 46.2129 36.1777 46.7028 37.334 47.0697C39.2414 47.6758 40.9771 47.5903 42.3491 47.3852C43.8789 47.1568 47.0599 45.4592 47.7235 43.5994C48.3869 41.7392 48.3869 40.1451 48.1879 39.8129C47.9889 39.4808 47.4581 39.2816 46.6619 38.8829ZM32.1339 58.7196H32.1231C27.3704 58.7177 22.709 57.4408 18.6425 55.0277L17.6752 54.4537L7.651 57.0833L10.3266 47.3096L9.697 46.3074C7.04562 42.0906 5.64525 37.2167 5.64738 32.2121C5.65325 17.6089 17.5349 5.72832 32.1444 5.72832C39.2188 5.73069 45.8687 8.48932 50.8695 13.4957C55.8701 18.5019 58.6224 25.1564 58.6196 32.2334C58.6136 46.8377 46.7321 58.7196 32.1339 58.7196ZM54.6754 9.69157C48.659 3.66832 40.6581 0.349691 32.1335 0.346191C14.5692 0.346191 0.274125 14.6404 0.267 32.2101C0.26475 37.8266 1.732 43.3083 4.52075 48.1411L0 64.6538L16.8926 60.2226C21.5471 62.7613 26.7875 64.0994 32.1209 64.1012H32.134C49.6964 64.1012 63.9927 49.8054 64 32.2356C64.0033 23.7209 60.6916 15.7148 54.6754 9.69157Z" fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_317_5002">
                                        <rect width="64" height="64" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span className='font-bold text-2xl'>Contact Us</span>
                        <a href="https://wa.me/6281939839007" target="_blank" className='text-xl'>0819 - 3983 - 9007</a>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 py-[25px] px-2 rounded-[20px] bg-[#0C2A74] w-[370px]'>
                        <span className='transition-all duration-300 ease-in-out hover:scale-110 active:scale-100'>
                            <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_317_4999)">
                                    <path d="M34.9999 6.33325C23.727 6.33325 14.5833 15.477 14.5833 26.7499C14.5833 42.0624 34.9999 64.6666 34.9999 64.6666C34.9999 64.6666 55.4166 42.0624 55.4166 26.7499C55.4166 15.477 46.2728 6.33325 34.9999 6.33325ZM34.9999 34.0416C30.9749 34.0416 27.7083 30.7749 27.7083 26.7499C27.7083 22.7249 30.9749 19.4583 34.9999 19.4583C39.0249 19.4583 42.2916 22.7249 42.2916 26.7499C42.2916 30.7749 39.0249 34.0416 34.9999 34.0416Z" fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_317_4999">
                                        <rect width="70" height="70" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span className='font-bold text-2xl'>Our Location</span>
                        <a href="https://maps.app.goo.gl/stEocKveTt1ZXvfg8" target="_blank" className='text-xl'>Wonorejo Selatan no.17, Surabaya</a>
                    </div>
                </div>
            </div>
            <Footer iconClassname='w-[555px] absolute bottom-[-170px] right-[-10px] z-[-1]' />
        </div>
    )
}