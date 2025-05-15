import { JSX } from "react";

export interface IExploreDetail {
    name: string;
    description: string;
    lesgosurabayaReview: string;
    facilitiesAndService: JSX.Element;
    contact: {
        phone?: string;
        instagram?: string;
        tiktok?: string;
    };
    location: JSX.Element;
    pictures: string[],
    highlight: {
        type: "image" | "video";
        url: string;
    };
}

type IExploreDetailList = Record<string, IExploreDetail>;

export const exploreDetail: IExploreDetailList = {
    "Drift.inc": {
        "name": "Drift.inc",
        "description": "Drift.Inc is an indoor go-karting arena in Bandung offering a thrilling racing experience with a 3,000 m² circuit. Featuring eco-friendly e-karts and catering to both beginners and advanced racers, it’s perfect for friends, family, and team-building activities. Enjoy fun competitions and a safe, exciting environment for all ages.",
        "lesgosurabayaReview": "Tried out Drift.Inc at Grand City Mall and it was such a blast! 🏁 The indoor go-kart track is super spacious with 15 sharp turns that really test your reflexes. The electric karts feel smooth and fast, and they have different speed classes for all levels—even beginners. Safety’s covered too with helmets and clear instructions. Definitely a fun spot to challenge your friends or just let off some steam. Totally worth the ride!.",
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Open daily (10.00 - 22.00).</li>
                <li>Indoor Electric Go-Kart Track - Spacious and well design track suitable for beginners and experienced racers.</li>
                <li>Safety gear - Helmets and protective equipment provided to ensure rider safety</li>
                <li>Spectators area - Designated zones for friends and family to watch the races comfortably.</li>
                <li>Race sessions: Each session includes a 7-minute race, along with warm up and celebration laps.</li>
                <li>
                    Pricing:
                    <ul className="list-disc ml-5">
                        <li>Intermediate weekday: IDR 70.000</li>
                        <li>Intermediate weekend: IDR 90.000</li>
                        <li>Advance weekday: IDR 90.000</li>
                        <li>Advance weekend: IDR 110.000</li>
                    </ul>
                </li>
            </ul>
        ),
        "contact": {
            "phone": "0878 - 0983 - 1625",
            "instagram": "driftinc.id",
        },
        "location": (
            <iframe title="Drift.inc" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8152276936235!2d112.75062938009837!3d-7.261858277460183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9635b48b689%3A0x61d9a287ce231f86!2sGrand%20City%20Mall%20Surabaya!5e0!3m2!1sid!2sid!4v1746716508167!5m2!1sid!2sid" width="613" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/wisata/1.jpg",
            "/images/explore/wisata/drift/2.jpg",
            "/images/explore/wisata/drift/3.heic",
            "/images/explore/wisata/drift/4.heic",
            "/images/explore/wisata/drift/5.jpg",
        ],
        "highlight": {
            "type": "video",
            "url": "/images/explore/wisata/drift/6.mp4",
        }
    },
    "BYEBELI": {
        "name": "Byebeli Experience",
        "description": "Lorem ipsum",
        "lesgosurabayaReview": "Byebeli Experience in Citraland is a fun gaming spot in Surabaya. The space feels cozy and modern, equipped with quality gear like 165Hz monitors, mechanical keyboards, and PS5s. VR and racing simulators add an extra level of excitement. With a built-in café and relaxed atmosphere, it's perfect for casual solo play or hanging out with friends.",
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Operating Hours - Monday to Thursday from 12.00 - 22.00 WIB, Friday from 12.00 - 00.00 WIB, Saturday to Sunday from 10.00 - 22.00 WIB.</li>
                <li>Gaming Station - Equipped with PC gaming setups, Playstation consoles, VR experiences, Racing simulators, and golf simulators.</li>
                <li>Private Rooms – VIP and Streaming VIP rooms available for private gaming sessions or content creation.</li>
                <li>Cafe and Eatery - Offers a variety of food and beverages starting from IDR 10.000.</li>
                <li>Flexible Pricing - Rates vary depending on the equipment and duration.</li>
                <ol className="list-decimal ml-6">
                    <li>PC Gaming (Rp 15,000-Rp 80,000)</li>
                    <li>Membership (Rp 55,000-Rp 100,000)</li>
                    <li>VIP Room (Rp 20,000-Rp 150,000)</li>
                    <li>Streaming VIP Room (Rp 60,000)</li>
                    <li>Racing Simulator (Rp 50,000-Rp 600,000)</li>
                    <li>Golf Simulator (Rp 150,000)</li>
                </ol>
            </ul>
        ),
        "contact": {
            "phone": "0823 - 1101 - 1006",
            "instagram": "@byebeli.experience",
        },
        "location": (
            <iframe title="Drift.inc" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7956.292123427425!2d112.64963352972754!3d-7.295441770207643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fd74f7ee41f7%3A0xe2c48abb37e4a8d1!2sByebeli%20Experience%20-%20Citraland%20%7C%20PS5%20%7C%20PC%20Gaming%20%7C%20Racing%20simulator%20%7C%20Nintendo%20Switch%20%7C%20VR%20%7C%20Warnet%20Gaming%20Cafe!5e0!3m2!1sid!2sid!4v1746703615185!5m2!1sid!2sid" width="613" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/wisata/2.jpg",
            "/images/explore/wisata/byebeli/1.jpeg",
            "/images/explore/wisata/byebeli/2.png",
            "/images/explore/wisata/byebeli/3.png",
            "/images/explore/wisata/byebeli/4.png",
        ],
        "highlight": {
            "type": "image",
            "url": "/images/explore/wisata/byebeli/4.png",
        }
    },
    "Dreamfield Tactical": {
        "name": "Dreamfield Tactical",
        "description": "DreamField Tactical Surabaya is an indoor tactical shooting and wargame arena offering exciting activities like shooting ranges and wargame arenas. Located at The Central Mall, Surabaya, it provides a fun and safe environment for both beginners and experienced players. Perfect for individuals, families, and corporate groups.",
        "lesgosurabayaReview": "Dream Field Tactical in The Central Mall lets you experience real-life war games with airsoft rifles, handguns, and sniper setups. With multiple game modes and coaching options, it’s perfect for thrill-seekers and team players. Prices start from just IDR 50K—worth checking out for an adrenaline-pumping day!",
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Open daily from 12.00 - 21.00 WIB.</li>
                <li>War game arena - Engage in team-based tactical combat scenarios, simulating real-life military operations.</li>
                <li>Shooting range - Practice shooting skills with various targets, enhancing precision and accuracy.</li>
                <li>Sniper Area - Specialized zone for long-range shooting practice, catering to enthusiasts seeking to refine their sniper skills.</li>
                <li>AAIPSC Class - Advanced training sessions focusing on dynamic shooting techniques and tactical movements.</li>
                <li>Executive Shooting Range - Premium shooting lanes designed for a more exclusive and comfortable experience.</li>
                <li>Equipment Provision - All necessary gear, including airsoft guns, protective vests, and helmets, are provided to ensure safety and enhance the gaming experience.</li>
                <li>Experienced Trainers - Trained staff are available to guide participants, ensuring proper usage of equipment and adherence to safety protocols.</li>
                <li>Flexible Packages:
                    <ul className="list-disc ml-5">
                        <li>Shooting Target:
                            <ol className="list-decimal ml-6">
                                <li>AEG / Rifle: IDR 75,000 (50 BB)</li>
                                <li>GBB / Handgun: IDR 50,000 (50 BB)</li>
                                <li>Sniper Spring: IDR 50,000 (30 BB)</li>
                            </ol>
                        </li>
                        <li>War Game Arena:
                            <ul className="list-disc ml-5">
                                <li>Field Rental:
                                    <ol className="list-decimal ml-6">
                                        <li>1 Hour: IDR 35,000</li>
                                        <li>2 Hours: IDR 50,000</li>
                                    </ol>
                                </li>
                                <li>Unit & Field Rental:
                                    <ol className="list-decimal ml-6">
                                        <li>WGG: IDR 100,000/1hr | IDR 150,000/2hrs</li>
                                        <li>AEG: IDR 150,000/1hr | IDR 225,000/2hrs</li>
                                        <li>GBB: IDR 125,000/1hr | IDR 200,000/2hrs</li>
                                    </ol>
                                </li>
                            </ul>
                        </li>
                        <li>Training / Coaching Class:
                            <ol className="list-decimal ml-6">
                                <li>Private (1 Participant): IDR 125,000 / 1.5hrs</li>
                                <li>Semi Private (2–3 Participants): IDR 100,000 / participant / 1.5hrs</li>
                                <li>Group (4–5 Participants): IDR 75,000 / participant / 1.5hrs</li>
                            </ol>
                            <p className="ml-6">Costs above are for trainers only, additional fees for fields, etc.</p>
                        </li>
                        <li>Entry Fee (HTM): IDR 50,000 / participant</li>
                    </ul>
                </li>
            </ul>
        ),
        "contact": {
            "phone": "0852 - 3355 - 4628",
            "instagram": "@DREAMFIELDTACTICALSURABAYA",
        },
        "location": (
            <iframe title="Dreamfield Tactical" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.36723240128376!2d112.71596282110607!3d-7.254982828156784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f94ccf012101%3A0x4d984230e02c5b8!2sThe%20Central%20Mall%20-%20Gunawangsa%20Tidar!5e0!3m2!1sid!2sid!4v1746716573778!5m2!1sid!2sid" width="600" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/wisata/3.png",
            "/images/explore/wisata/dreamfield/1.webp",
            "/images/explore/wisata/dreamfield/2.webp",
            "/images/explore/wisata/dreamfield/3.webp",
            "/images/explore/wisata/dreamfield/4.webp",
        ],
        "highlight": {
            "type": "image",
            "url": "/images/explore/wisata/dreamfield/4.webp",
        }
    },
    "The Ramoe": {
        "name": "The Ramoe",
        "description": "The Ramoe is a contemporary Asian restaurant located on the lobby floor of EXCOTEL Design Hotel Surabaya, situated at Jl. Frontage A Yani No. 119, Surabaya. Open daily from 06:00 to 23:00, The Ramoe offers a culinary journey through the diverse flavors of Asia. The restaurant's ambiance is designed to provide a comfortable and inviting atmosphere for guests to enjoy their meals.",
        "lesgosurabayaReview": "Located at The Ramoe Excotel, this restaurant offers a cozy dining space with a wide variety of buffet dishes. From Middle Eastern favorites to international menus, it’s perfect for family dinners or special occasions. Great vibes, good food, and Instagram-worthy interiors!",
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Open daily from 06.00 – 23.00 WIB.</li>
                <li>International Buffet – Over 50 dishes from various cuisines around the world.</li>
                <li>Highlighted Menu – Nasi Mandi, Roast Lamb, Pasta, and Ramadhan Specialties.</li>
                <li>Comfortable Dining Space – Warm ambience, ideal for families and special gatherings.</li>
                <li>Easy Reservation – Book via Whatsapp at +62 856 4500 9263.</li>
                <li>Instagrammable – Great for content and dining moments.</li>
                <li>Buffet Pricing:
                    <ul className="list-disc ml-5">
                        <li>Regular: IDR 208,000 nett/person</li>
                        <li>Earlybird: IDR 178,000 nett/person</li>
                    </ul>
                </li>
            </ul>
        ),
        "contact": {
            "phone": "0856 – 4500 - 9263",
            "instagram": "@the.ramoe",
        },
        "location": (
            <iframe title="The Ramoe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.263747951683!2d112.73012057586152!3d-7.32424409268393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb21d6154f65%3A0x6c4f185142943b00!2sEXCOTEL%20Design%20Hotel%20Surabaya!5e0!3m2!1sid!2sid!4v1746716628543!5m2!1sid!2sid" width="600" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/wisata/4.png",
            "/images/explore/wisata/ramoe/1.png",
            "/images/explore/wisata/ramoe/2.png",
            "/images/explore/wisata/ramoe/3.jpg",
            "/images/explore/wisata/ramoe/4.jpg",
        ],
        "highlight": {
            "type": "video",
            "url": "/images/explore/wisata/ramoe/5.mp4",
        }
    },
    "Kedai Doa Ibu": {
        "name": "Kedai Doa Ibu",
        "description": "Kedai Doa Ibu welcomes you with a nostalgic atmosphere and homemade comfort food. From hearty meals to unique local drinks, every dish is crafted with love and tradition. Set in warm, vintage, it’s the perfect place to enjoy authentic flavors and comforting vibes, just like a mother’s love.",
        "lesgosurabayaReview": "Located in Gubeng, Kedai Do’a Ibu offers a cozy, vintage-style café experience with both indoor and outdoor seating. The atmosphere feels warm and homey like dining at your mom’s house. With affordable menu items starting from IDR 9K, comforting dishes, and occasional live music, it’s a perfect spot to unwind in the evening. Open from 11 AM to midnight, Monday to Sunday.",
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Open every day (11.00 – 24.00).</li>
                <li>Vintage Interior – Step into a nostalgic space filled with the warmth and charm of old times, just like your mother’s living room.</li>
                <li>Indoor and outdoor seating – Options to suit your preference, whether you enjoy the comfort of indoor spaces or the freshness of outdoor areas.</li>
                <li>Smooking area – Designated spaces for smokers.</li>
                <li>VIP room – Private area available for special occasions or meetings.</li>
                <li>Live music – Enjoy soft, soulful tunes that accompany your meal.</li>
                <li>Halal menu – All dishes are prepared following halal standards.</li>
                <li>Digital payments accepted – Qris & digital wallets.</li>
            </ul>
        ),
        "contact": {
            "phone": "0823 - 3842 - 7973",
            "instagram": "@kedaidoaibuid",
        },
        "location": (
            <iframe title="Kedai Doa Ibu" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31662.184088632013!2d112.71893236137953!3d-7.266652835367978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb0040d0d457%3A0xf455bdfb86ba45e!2sKEDAI%20DO&#39;A%20IBU!5e0!3m2!1sid!2sid!4v1746716696293!5m2!1sid!2sid" width="600" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/umkm/1.png",
            "/images/explore/umkm/doa/1.jpeg",
            "/images/explore/umkm/doa/2.jpeg",
            "/images/explore/umkm/doa/3.png",
            "/images/explore/umkm/doa/4.png",
        ],
        "highlight": {
            "type": "video",
            "url": "/images/explore/umkm/doa/5.mp4",
        }
    },
    "WIBAJUL": {
        "name": "WIBAJUL",
        "description": "Discover the Bold Taste of Warung Indomie Bangladesh Bang Ijul in Surabaya. Wibajul serves up indomie like you,ve never had before. Rich, savory, and loaded with a signature homemade sambal. Every bowl brigs comfort, excitement, and a little kick of adventure. A must visit spot for noodle lovers who want more than just the ordinary!",
        "lesgosurabayaReview": `Wibajul offers a unique take on Indomie, known as "Mie Bangladesh," featuring rich spices and optional kampung egg toppings. The eatery provides a casual outdoor setting, perfect for evening gatherings. With affordable prices starting from IDR 13,000, it's a go-to spot for those craving flavorful, spicy noodles. Open daily from 12 PM to 12 AM, it's advisable to arrive early to avoid the crowd.`,
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Open every day (12.00 - 00.00).</li>
                <li>Outdoor seating - Enjoy your meal in a open air setting, perfect for evening dining.</li>
                <li>Authentic Mie Bangladesh - Specializing in mie nyemek rich spices and optional kampung egg topping.</li>
                <li>Variety of dishes - Offering both Mie Bangladesh and Mie Nusantara with savory and spicy flavors.</li>
                <li>Affordable Pricing - Dishes start from IDR 13.000, budget friendly.</li>
                <li>Parking area - Available parking space for customers.</li>
                <li>Digital Payments Accepted: Qris & digital wallets.</li>
            </ul>
        ),
        "contact": {
            "phone": "0878 - 4197 - 7438",
            "instagram": "@wibajul",
            "tiktok": "@wib.ajul",
        },
        "location": (
            <iframe title="WIBAJUL" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.550833190164!2d112.75727927586134!3d-7.2918339927156435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbb1dcd314a9%3A0xc5741c054ec9b00e!2sWIBAJUL%20(Warung%20Mie%20BangLades%20Ajul)!5e0!3m2!1sid!2sid!4v1746716758237!5m2!1sid!2sid" width="600" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/umkm/2.png",
            "/images/explore/umkm/wibajul/1.jpg",
            "/images/explore/umkm/wibajul/2.jpg",
            "/images/explore/umkm/wibajul/3.png",
            "/images/explore/umkm/wibajul/4.jpg",
        ],
        "highlight": {
            "type": "video",
            "url": "/images/explore/umkm/wibajul/5.mp4",
        }
    },
    "Mie Babat Jembatan Asli": {
        "name": "Mie Babat Jembatan Asli",
        "description": "Mie Babat Jembatan Asli brings the authentic flavors of Surabaya with tender beef tripe served over noodles in a rich, savory broth. This beloved dish perfectly captures the essence of local tradition, offering a satisfying and flavorful experience in every bite.",
        "lesgosurabayaReview": `Mie Babat Jembatan Asli is a beloved culinary gem in Surabaya. Offers a delicious selection of mie legendaris, famous for its Mie Babat Otot (noodles with beef tripe and muscle). Known for its consistent quality since 1984, all dishes are halal, affordable (IDR 15K–42K), and full of flavor. The spot is a must-visit for anyone craving authentic, hearty noodles. Open daily from 2 PM to 9 PM or until sold out.`,
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Open every day (14.00 - 21.00).</li>
                <li>Halal Menu - All dishes are made with halal ingredients, including beef tripe and muscle cuts.</li>
                <li>Variety of dishes - Serving range of noodle dishes such as Mie babat otot, Pangsit mie ayam, Sahun babat, and Song mie special.</li>
                <li>Frozen Version Available - You can order frozen versions of their famous dishes to enjoy at home.</li>
                <li>Delivery Services - Available through GoFood.</li>
                <li>Digital Payments Accepted: Qris & digital wallets.</li>
            </ul>
        ),
        "contact": {
            "phone": "0851 - 0014 – 4148 / 0812 – 4952 - 9691",
            "instagram": "@mie_babay_jembatan_asli",
        },
        "location": (
            <iframe title="Mie Babat Jembatan Asli" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.7071106314074!2d112.77071797586127!3d-7.274130892732961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa29976d9d73%3A0x4a9d73f24d4b07aa!2sMie%20Babat%20Jembatan%20Asli!5e0!3m2!1sid!2sid!4v1746716804353!5m2!1sid!2sid" width="600" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/umkm/mie/1.png",
            "/images/explore/umkm/mie/2.jpg",
            "/images/explore/umkm/3.jpg",
            "/images/explore/umkm/mie/4.jpg",
            "/images/explore/umkm/mie/5.png",
        ],
        "highlight": {
            "type": "video",
            "url": "/images/explore/umkm/mie/6.mp4",
        }
    },
    "Seblak Kak Ross": {
        "name": "Seblak Kak Ross",
        "description": "Seblak Prasmanan Kak Ros offers a customizable seblak experience with a variety of fresh ingredients like crackers, noodles, and proteins, all served in a rich, spicy broth. A flavorful, spicy treat for all taste buds, perfect for those craving a satisfying, authentic Indonesian dish.",
        "lesgosurabayaReview": `Seblak Prasmanan Kak Ross in Surabaya offers a unique buffet-style seblak experience where you can mix and match your own toppings—from noodles and crackers to meatballs and chicken feet. Starting from just IDR 1,000 per item, it’s budget-friendly and perfect for spice lovers. The broth is rich, customizable in spiciness, and full of flavor. A must-try for anyone exploring local eats in Surabaya!.`,
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Open Every day.</li>
                <li>Customizeable Seblak Bowl - Easy to use buffet line where you can choose your own toppings and spice level.</li>
                <li>Comfortable dining area - Cozy outdoor seating in a clean and relaxed atmosphere.</li>
                <li>Takeaway & Delivery - Available in ShopeeFood, GoFood, GrabFood.</li>
                <li>Digital payments accepted - Qris & digital wallets.</li>
            </ul>
        ),
        "contact": {
            "phone": "0813 - 5800 - 0548",
            "instagram": "@seblak_kak_ross",
        },
        "location": (
            <iframe title="Seblak Kak Ross" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126655.11826260701!2d112.46157819726564!3d-7.243975199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78009ca846c561%3A0x4d632c7a6f0c6d22!2sSeblak%20Bandung%20Kak%20Ross!5e0!3m2!1sid!2sid!4v1746716855285!5m2!1sid!2sid" width="600" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/umkm/seblak/1.png",
            "/images/explore/umkm/seblak/2.jpg",
            "/images/explore/umkm/seblak/3.png",
            "/images/explore/umkm/seblak/4.jpg",
            "/images/explore/umkm/4.png",
        ],
        "highlight": {
            "type": "video",
            "url": "/images/explore/umkm/seblak/5.mp4",
        }
    },
    "Jayaland": {
        "name": "Jayaland",
        "description": "Jayaland is a prominent property developer focusing on the southern regions of Surabaya and Sidoarjo. Their flagship project, Puri Surya Jaya, offers a blend of residential comfort and comprehensive amenities.",
        "lesgosurabayaReview": `Puri Surya Jaya, a residential project by Jayaland located in Sidoarjo, near Surabaya. This development offers a strategic location, just 10 minutes from Juanda Airport and Surabaya, with easy access to essential amenities. The homes, including the Attic House Type Nordic, are designed with modern functionality, perfect for young families or couples. The area is surrounded by conveniences like McDonald's, Superindo, and various food spots, ensuring both comfort and convenience. With prices starting from around 1M IDR, it's an affordable option for those seeking a quality home in a prime location.`,
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Show unit open everyday from 09.00 - 17.00 WIB.</li>
                <li>Residential Clusters - Diverse housing options, including clusters like Grand Alexandria, Surya Breeze, and Valencia.</li>
                <li>Educational Institutions - Proximity to schools, ensuring quality education within reach.</li>
                <li>Retail and Dining - Access to supermarkets such as Superindo and dining options including Mie Gacoan.</li>
                <li>Property Management - Regular maintenance and management services to ensure a comfortable living environment.</li>
                <li>Security - 24/7 security services to ensure the safety of residents.</li>
                <li>Customer Service - Dedicated support for residents' inquiries and assistance.</li>
            </ul>
        ),
        "contact": {
            "phone": "0823 - 5900 - 4500",
            "instagram": "@jayaland.id",
        },
        "location": (
            <iframe title="Jayaland" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6477463031747!2d112.7369998758622!3d-7.39330989261653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e5000adf0f73%3A0x5fb28bbe8bb11868!2sOslo%20(Puri%20Surya%20Jaya)!5e0!3m2!1sid!2sid!4v1746716964258!5m2!1sid!2sid" width="600" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/hospital/1.jpg",
            "/images/explore/hospital/jayaland/1.jpg",
            "/images/explore/hospital/jayaland/2.jpg",
            "/images/explore/hospital/jayaland/3.jpg",
            "/images/explore/hospital/jayaland/4.jpg",
        ],
        "highlight": {
            "type": "video",
            "url": "/images/explore/hospital/jayaland/5.mp4",
        }
    },
    "The Capital Hotel": {
        "name": "The Capital Hotel",
        "description": "The Capital Hotel Surabaya is a modern, aesthetic 4-star hotel offering comfortable rooms with amenities like free Wi-Fi, air conditioning, and flat-screen TVs. Located near shopping centers and business areas, it features stylish dining options, a fitness center, spa services, and an airport shuttle, making it a perfect choice for both business and leisure stays.",
        "lesgosurabayaReview": `A 4-star aesthetic hotel located in Jemursari, Surabaya. The hotel boasts a strategic location, making it convenient for travelers. With its modern design and comfortable amenities, it's recommended for those seeking a stylish stay in the city.`,
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Accommodations - The hotel features a range of rooms and suites, including Executive Rooms and Grand Deluxe Rooms, designed with modern aesthetics and equipped with amenities like air conditioning, flat-screen TVs, minibars, and work desks.</li>
                <li>Dining - Guests can enjoy meals at the on-site restaurant, Sekarwangi, which serves a variety of cuisines.</li>
                <li>Fitness & Wellness - The hotel offers a fitness center for guests looking to maintain their workout routines.</li>
                <li>Event Spaces - The Bima Ballroom, with dimensions of 24x15 meters, is suitable for conferences, weddings, and various events, accommodating up to 500 guests.</li>
                <li>Additional Amenities - Facilities include a sun terrace, spa services, free Wi-Fi, and free parking.</li>
                <li>24-Hour Front Desk - Provides concierge services, luggage storage, and assistance with tour arrangements.</li>
                <li>Laundry Services - Available for guests requiring cleaning services during their stay.</li>
                <li>Airport Shuttle - Available upon request, offering convenient transfers to and from Juanda International Airport.</li>
            </ul>
        ),
        "contact": {
            "phone": "0852 - 3804 - 8808",
            "instagram": "@stayatcapitalsby",
        },
        "location": (
            <iframe title="The Capital Hotel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6352.250351164374!2d112.75441795222787!3d-7.317181074344169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb124320900d%3A0x92121e6674b7bd05!2sThe%20Capital%20Hotel%20Surabaya!5e0!3m2!1sid!2sid!4v1746717074398!5m2!1sid!2sid" width="600" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/hospital/capital/1.jpg",
            "/images/explore/hospital/capital/2.jpg",
            "/images/explore/hospital/capital/3.jpg",
            "/images/explore/hospital/2.jpg",
            "/images/explore/hospital/capital/5.jpg",
        ],
        "highlight": {
            "type": "video",
            "url": "/images/explore/hospital/capital/6.mp4",
        }
    },
    "Dafam Pacific Caesar": {
        "name": "Dafam Pacific Caesar",
        "description": "Dafam Pacific Hotel Surabaya is a modern 3-star hotel located in Mulyorejo area, Surabaya. Offering stylish rooms with amenities like free Wi-Fi, air conditioning, and flat-screen TVs. Located near popular shopping centers, it features a restaurant, bar, spa, fitness center, and meeting facilities. Perfect for both business and leisure stays.",
        "lesgosurabayaReview": `Hotel Dafam Pacific Caesar Surabaya, a 3-star hotel situated in the Mulyorejo area. The hotel offers spacious and clean rooms, friendly staff, and a convenient location near Galaxy Mall and Airlangga University.`,
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Rooms - The hotel features 108 air conditioned rooms equipped with LCD TVs, desks, safes, and private bathrooms with complimentary toiletries.</li>
                <li>Dining - Guests can enjoy meals at the on-site restaurant, which serves a variety of cuisines, and unwind at the bar/lounge.</li>
                <li>Business & Events - Meeting and banquet facilities are available for business events and gatherings.</li>
                <li>Wi-Fi & Parking - Complimentary Wi-Fi is accessible throughout the hotel, and free public parking is available on-site.</li>
                <li>Cleaning Services - Laundry, dry cleaning, and ironing services are offered to keep guests' attire fresh and clean.</li>
            </ul>
        ),
        "contact": {
            "phone": "0895 - 0550 - 6432",
            "instagram": "@dafampacificcaesar",
        },
        "location": (
            <iframe title="Dafam Pacific Caesar" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8414888881484!2d112.78047188434948!3d-7.258874193901684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f941748c4b6d%3A0x6d9ca7365f7dffc5!2sDAFAM%20Pacific%20Caesar%20Surabaya!5e0!3m2!1sid!2sid!4v1746717184229!5m2!1sid!2sid" width="600" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/hospital/3.jpg",
            "/images/explore/hospital/dafam/1.jpg",
            "/images/explore/hospital/dafam/2.jpg",
            "/images/explore/hospital/dafam/3.png",
            "/images/explore/hospital/dafam/4.png",
        ],
        "highlight": {
            "type": "video",
            "url": "/images/explore/hospital/dafam/5.mp4",
        }
    },
    "News Hotel": {
        "name": "News Hotel",
        "description": "News Hotel is a modern 3-star hotel offering comfortable rooms with free Wi-Fi, air conditioning, and flat-screen TVs. Located near shopping centers, it features a restaurant, spa, fitness center, and meeting facilities, making it ideal for both business and leisure stays. Its strategic location near shopping centers like City of Tomorrow and Royal Plaza Surabaya makes it an ideal choice for both business and leisure travelers.",
        "lesgosurabayaReview": `News Hotel Waru Sidoarjo is a 3-star hotel located in the Waru area of Sidoarjo, East Java. It offers a range of facilities and services suitable for both business and leisure travelers. With its strategic location near Juanda International Airport and various attractions in Surabaya, News Hotel Waru Sidoarjo offers a convenient and comfortable stay for travelers.`,
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Comfortable Rooms - The hotel features 83 air-conditioned rooms equipped with flat-screen TVs, desks, and private bathrooms. Some rooms offer city or garden views.</li>
                <li>Dining Options - Guests can enjoy meals at the on-site restaurant, which serves Indonesian cuisine. A café and bar are also available for light refreshments.</li>
                <li>Meeting Facilities - The hotel provides meeting and banquet facilities suitable for business events and gatherings.</li>
                <li>Room Service - Room service is available for guests who prefer to dine in the comfort of their rooms.</li>
                <li>Car Rental - Car rental services are available for guests who wish to explore the surrounding area.</li>
            </ul>
        ),
        "contact": {
            "phone": "031 - 8558 - 1000",
            "instagram": "@newshotelsidoarjo",
        },
        "location": (
            <iframe title="News Hotel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8573203930932!2d112.72322047586198!3d-7.369884792639416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e4a2a73e109d%3A0xe1c2c683b15f6336!2sNews%20Hotel%20Waru%20Sidoarjo!5e0!3m2!1sid!2sid!4v1746717223933!5m2!1sid!2sid" width="600" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/hospital/news/1.jpg",
            "/images/explore/hospital/news/2.jpg",
            "/images/explore/hospital/news/3.jpg",
            "/images/explore/hospital/news/4.jpg",
            "/images/explore/hospital/4.jpg",
        ],
        "highlight": {
            "type": "video",
            "url": "/images/explore/hospital/news/5.mp4",
        }
    },
    "Yoga Fit": {
        "name": "Yoga Fit",
        "description": "Yoga Fit Surabaya is a modern yoga studio offering various classes such as Hatha, Hot Yoga, and Yoga Swing, guided by professional instructors. Located in Puncak Bukit Golf, the studio provides complete facilities to ensure a comfortable practice for all skill levels.",
        "lesgosurabayaReview": `Yoga Fit Surabaya, a peaceful and modern yoga studio offering a variety of classes like Hot Yoga and Swing Yoga. With full facilities including showers, lockers, and free yoga gear, it’s perfect for both beginners and regular practitioners. You can even try a free trial class before committing.`,
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Yoga Studios - Two dedicated studios, including one for hot yoga sessions at 42°C, provide diverse practice environments.</li>
                <li>Relaxation Areas - Members can unwind in two relaxation lounges and waiting rooms before classes.</li>
                <li>Amenities - Facilities include shower rooms equipped with soap, shampoo, and hairdryers; changing rooms; lockers (please bring your own padlock); and water dispensers for refilling bottles.</li>
                <li>Group Classes - A variety of classes cater to all levels, including Yoga Basic, Hot Yoga, Swing Yoga, Backbend, Hatha Basic, Yoga Balance, and Sun Salutation.</li>
                <li>Personal Training - One-on-one sessions are available with experienced instructors, focusing on individual goals.</li>
                <li>Corporate Training - Tailored yoga programs are offered for corporate wellness initiatives.</li>
                <li>Teacher Training - Comprehensive courses are available for those aspiring to become certified yoga instructors.</li>
                <li>Free Trial - New members can enjoy a complimentary trial class to experience the studio's offerings.</li>
            </ul>
        ),
        "contact": {
            "phone": "0838 - 1130 - 8999",
            "instagram": "@yogafit_id",
        },
        "location": (
            <iframe title="Yoga Fit" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.507942338169!2d112.6642505871582!3d-7.283212799999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fd76211212bf%3A0x561d39822b50e753!2sYoga%20Fit%20Surabaya!5e0!3m2!1sid!2sid!4v1746717271956!5m2!1sid!2sid" width="600" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/lifestyle/yoga/1.jpg",
            "/images/explore/lifestyle/yoga/2.jpg",
            "/images/explore/lifestyle/1.jpg",
            "/images/explore/lifestyle/yoga/4.jpg",
            "/images/explore/lifestyle/yoga/5.jpg",
        ],
        "highlight": {
            "type": "video",
            "url": "/images/explore/lifestyle/yoga/6.mp4",
        }
    },
    "Katha Beauty Care": {
        "name": "Katha Beauty Care",
        "description": "Katha Beauty Care Surabaya is a modern beauty clinic offering a full range of skin treatments, including facials, plasma facelifts, and customized therapies for all skin types. With professional staff and high-quality products, Katha helps you achieve a naturally radiant and confident look.",
        "lesgosurabayaReview": `Katha Beauty Care Surabaya, spotlighting it as a go-to destination for comprehensive beauty treatments. The studio offers a range of services, including the Japan Water Healing Spa, 10-in-1 facial treatments, and Korean body spas, all designed to rejuvenate and pamper clients. With a serene ambiance and professional staff, Katha Beauty Care provides a holistic experience for those seeking relaxation and beauty enhancements.`,
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Open daily from 09.00 - 21.00 WIB.</li>
                <li>Specialized Treatment Rooms - Dedicated spaces for facials, body treatments, and nail services.</li>
                <li>Relaxation Areas - Comfortable lounges for clients to unwind before or after treatments.</li>
                <li>Hygienic Equipment - All tools and equipment are sterilized to maintain the highest hygiene standards.</li>
                <li>Facial Treatments - Customized facials targeting various skin concerns.</li>
                <li>Korean Body Spa - Relaxation massages using Korean techniques to relieve stress and tension.</li>
                <li>Nail Care - Manicure, pedicure, and nail art services to beautify hands and feet.</li>
                <li>Eyelash Extensions - Enhancing the natural lashes for a fuller look.</li>
                <li>Body Whitening - Treatments aimed at brightening and evening out skin tone.</li>
                <li>Bikini Line Care - Specialized treatments for the bikini area to ensure smooth and healthy skin.</li>
            </ul>
        ),
        "contact": {
            "phone": "0823 - 3380 - 0056",
            "instagram": "@kathabeautycare",
        },
        "location": (
            <iframe title="Katha Beauty Care" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4011846932317!2d112.7225965758613!3d-7.308746192699103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb00179ef465%3A0x103047f388e1c287!2sKATHA%20BEAUTY%20CARE!5e0!3m2!1sid!2sid!4v1746717392114!5m2!1sid!2sid" width="600" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/lifestyle/2.png",
            "/images/explore/lifestyle/katha/2.png",
            "/images/explore/lifestyle/katha/1.png",
            "/images/explore/lifestyle/katha/4.png",
            "/images/explore/lifestyle/katha/5.png",
        ],
        "highlight": {
            "type": "video",
            "url": "/images/explore/lifestyle/katha/6.mp4",
        }
    },
    "Fifa Gym": {
        "name": "FIFA Gym",
        "description": "FIFA Gym Sidoarjo is a fitness center located at Jl. Raya Rangkah Kidul No.21, Sidoarjo, East Java. It offers a variety of workout options, including gym facilities, aerobic classes, Zumba, and boxing sessions. The gym operates from Monday to Saturday, providing a welcoming environment for individuals at all fitness levels.",
        "lesgosurabayaReview": `FIFA Gym Sidoarjo, it as a dynamic fitness center offering a variety of classes and modern equipment to help individuals achieve their fitness goals. The gym provides a range of services including gym workouts, aerobic classes, Zumba sessions, and boxing training, all designed to cater to different fitness levels and preferences. With experienced trainers and a welcoming environment, FIFA Gym Sidoarjo aims to support its members in their fitness journey, making it a suitable choice for those looking to enhance their physical well-being.`,
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Open Monday - Saturday from 07.00 - 21.00 WIB.</li>
                <li>Fully equipped gym with modern fitness equipment.</li>
                <li>Aerobic and Zumba studio.</li>
                <li>Boxing area for training.</li>
                <li>Private workout areas for focused exercises.</li>
                <li>Changing rooms and showers.</li>
                <li>Free Wi-Fi access.</li>
                <li>Personal training sessions tailored to individual goals.</li>
                <li>Group fitness classes (Aerobic, Zumba, Boxing, etc.).</li>
                <li>Fitness assessments and workout plans.</li>
            </ul>
        ),
        "contact": {
            "phone": "0813 - 9949 - 1314",
            "instagram": "@fifagymsidoarjo",
        },
        "location": (
            <iframe title="FIFA Gym" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.023975004313!2d112.72804587586272!3d-7.462599092548852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e765ab215e7f%3A0xadc9caebdf1c5a94!2sFIFA%20GYM!5e0!3m2!1sid!2sid!4v1746717456154!5m2!1sid!2sid" width="600" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/lifestyle/3.png",
            "/images/explore/lifestyle/fifa/1.png",
            "/images/explore/lifestyle/fifa/2.jpg",
            "/images/explore/lifestyle/fifa/3.jpg",
            "/images/explore/lifestyle/fifa/4.jpg",
        ],
        "highlight": {
            "type": "video",
            "url": "/images/explore/lifestyle/fifa/5.mp4",
        }
    },
    "Arumda Beauty": {
        "name": "Arumda Beauty",
        "description": "Arumda Beauty is a certified beauty and wellness center located in Cerme, Gresik, with a branch in Benowo, Surabaya. Established in January 2022 by Iftiva Finandania, a licensed aesthetic therapist, Arumda offers a range of treatments including facials, chemical peels, mesotherapy, IPL, Pico Laser, slimming, spa, and hair care. With BNSP-certified professionals and modern equipment, Arumda provides safe and effective services in a comfortable setting.",
        "lesgosurabayaReview": `Arumda Beauty, a top beauty and wellness destination in Surabaya. The salon offers a wide range of services, including hair treatments, facials, body care, and nail services, all provided in a relaxing and professional environment. It's a perfect spot for those looking to refresh their beauty and wellness routine.`,
        "facilitiesAndService": (
            <ul className="list-disc ml-5">
                <li>Open daily from 09.00 - 20.00 WIB.</li>
                <li>Private Treatment Rooms – Ensuring privacy and comfort during your services.</li>
                <li>Modern Equipment – Utilization of up-to-date tools and products for optimal results.</li>
                <li>Hygienic Environment – Strict cleanliness protocols to maintain a safe and clean space.</li>
                <li>Facial Treatments – Customized facials to address various skin concerns.</li>
                <li>Hair Treatments – Services include haircuts, coloring, and keratin treatments.</li>
                <li>Nail Care – Manicure and pedicure services to keep your nails healthy and stylish.</li>
                <li>Eyelash Extensions – Enhance your lashes with professional extensions.</li>
                <li>Body Treatments – Including spa services to relax and rejuvenate your body.</li>
            </ul>
        ),
        "contact": {
            "phone": "0857 - 9171 - 3324",
            "instagram": "@arumdabeauty",

        },
        "location": (
            <iframe title="Arumda Beauty" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0396256844247!2d112.60064278483976!3d-7.236320274127714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7801002d550c99%3A0x7f90f190c8a380ba!2sArumda%20Beauty%20Benowo!5e0!3m2!1sid!2sid!4v1746717528836!5m2!1sid!2sid" width="600" height="336" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        ),
        "pictures": [
            "/images/explore/lifestyle/arumda/1.jpg",
            "/images/explore/lifestyle/arumda/2.jpg",
            "/images/explore/lifestyle/4.png",
            "/images/explore/lifestyle/arumda/4.png",
            "/images/explore/lifestyle/arumda/5.png",
        ],
        "highlight": {
            "type": "video",
            "url": "/images/explore/lifestyle/arumda/6.mp4",
        }
    },
}
