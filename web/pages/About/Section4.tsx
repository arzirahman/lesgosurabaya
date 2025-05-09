import ellipse1 from '../../assets/images/about/section4/Ellipse 1.png';
import ellipse2 from '../../assets/images/about/section4/Ellipse 2.png';
import ellipse3 from '../../assets/images/about/section4/Ellipse 3.png';
import ellipse4 from '../../assets/images/about/section4/Ellipse 4.png';
import ellipse5 from '../../assets/images/about/section4/Ellipse 5.png';
import ellipse6 from '../../assets/images/about/section4/Ellipse 6.png';
import ellipse7 from '../../assets/images/about/section4/Ellipse 7.png';
import ellipse8 from '../../assets/images/about/section4/Ellipse 8.png';
import ellipse9 from '../../assets/images/about/section4/Ellipse 9.png';
import ellipse10 from '../../assets/images/about/section4/Ellipse 10.png';
import ellipse11 from '../../assets/images/about/section4/Ellipse 11.png';
import ellipse12 from '../../assets/images/about/section4/Ellipse 12.png';
import ellipse13 from '../../assets/images/about/section4/Ellipse 13.png';
import ellipse14 from '../../assets/images/about/section4/Ellipse 14.png';
import ellipse15 from '../../assets/images/about/section4/Ellipse 15.png';
import ellipse16 from '../../assets/images/about/section4/Ellipse 16.png';

export default function Section4() {
    const partners = [
        { key: 'partner1', image: ellipse1 },
        { key: 'partner2', image: ellipse2 },
        { key: 'partner3', image: ellipse3 },
        { key: 'partner4', image: ellipse4 },
        { key: 'partner5', image: ellipse5 },
        { key: 'partner6', image: ellipse6 },
        { key: 'partner7', image: ellipse7 },
        { key: 'partner8', image: ellipse8 },
        { key: 'partner9', image: ellipse9 },
        { key: 'partner10', image: ellipse10 },
        { key: 'partner11', image: ellipse11 },
        { key: 'partner12', image: ellipse12 },
        { key: 'partner13', image: ellipse13 },
        { key: 'partner14', image: ellipse14 },
        { key: 'partner15', image: ellipse15 },
        { key: 'partner16', image: ellipse16 },
    ];

    return (
        <div className="w-full bg-[#D9D9D9] p-[70px]">
            <div className="flex flex-col gap-[50px] items-center max-w-[1440px] mx-auto w-full">
                <span className="font-extrabold text-[70px] leading-[76px]">Partner Terpercaya</span>
                <div className="grid grid-cols-8 gap-y-[47px] gap-x-[15px] w-full">
                    {partners.map((partner) => (
                        <img
                            key={partner.key}
                            alt={`Partner ${partner.key}`}
                            src={partner.image}
                            className="w-[154px] h-[154px] bg-white rounded-full"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
