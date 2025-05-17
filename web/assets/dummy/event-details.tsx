import { ReactElement } from "react";

export interface IEventDetail {
    name: string;
    description: ReactElement;
    location: string;
    date: string;
    highlight: {
        type: "image" | "video";
        url: string;
    };
}

type IEventDetailList = Record<string, IEventDetail>;

export const eventDetail: IEventDetailList = {
    "Dessert Day PTC": {
        name: "Dessert Day PTC",
        description: (
            <>
                <p>
                    Dessert lovers, swetten your day at PTC with their dessert day event!. Indulge in a variety of mouthwatering treats, from decadent cakes to refreshing ice creams.
                </p>
                <p className="mt-5">
                    It’s the perfect excuse to treat yourself! Don’t miss out on the sweetest event of the seasons!
                </p>
            </>
        ),
        location: "Main Atrium LG Floor, PTC, Surabaya",
        date: "7 – 16 March 2025",
        highlight: {
            type: "video",
            url: "/images/event/1.mp4"
        }
    },

    "ISSLF x GC": {
        name: "ISCLF",
        description: (
            <>
                <p>
                    Welcome to Indonesian Signature Culinary Lunar Festival! Experience the rich flavors of Indonesia, blending tradition and authentic taste in the festive atmosphere of the Lunar New Year!
                </p>
                <p className="mt-5">
                    Held at Grand City Mall Surabaya, the Indonesian Signature Culinary Lunar Festival brings together 48 iconic local tenants, presented through a collaboration between Grand City Mall and JIISCOMM, offering an unforgettable authentic culinary experience!
                </p>
                <p className="mt-5">7 culinary recommendations at ISCLF:</p>
                <ul className="list-disc ml-5">
                    <li>Sego Madura Ndower</li>
                    <li>Tongseng & Tengkleng Bu Bekti Semarang</li>
                    <li>Bigul Pande Egi Gianyar</li>
                    <li>Lumpia Semarang Gang 9</li>
                    <li>Nasi Goreng Babi Barong</li>
                    <li>Chris Pork</li>
                    <li>Dessert Go</li>
                </ul>
            </>
        ),
        location: "Main Atrium Level Ground, Grand City Mall Surabaya",
        date: "5 – 16 February 2025",
        highlight: {
            type: "video",
            url: "/images/event/2.mp4"
        }
    },

    "Chinese New Year TP": {
        name: "Majestic Lunar Wonders",
        description: (
            <>
                <p>
                    Celebrate the Lunar New Year with joy at the Majestic Lunar Wonders event at Atrium Tunjungan Plaza 6, Surabaya!
                </p>
                <p className="mt-5">
                    Enjoy special moments with your favorite characters, PAW Patrol, through a fun and exciting Meet & Greet at the Pawsporous Lunar New Year Celebration!
                </p>
                <p className="mt-5">
                    Don't miss the chance to meet the full PAW Patrol squad for the first time! Also, be amazed by the spectacular Bian Lian (traditional face-changing performance) — a show you definitely shouldn't miss!
                </p>
                <p className="mt-5">
                    LESGO! Celebrate Chinese New Year with family and friends in a festive atmosphere filled with happiness and surprises!
                </p>
            </>
        ),
        location: "Atrium Tunjungan Plaza 6, Surabaya",
        date: "17 January – 24 February 2025",
        highlight: {
            type: "video",
            url: "/images/event/3.mp4"
        }
    },

    "Xplora": {
        name: "XPLORA",
        description: (
            <>
                <p>
                    LESGO! Explore the world with XPLORA World Tour & Travel! Get ready for unforgettable adventures with a variety of exotic destinations and exciting trips specially curated for you!
                </p>
                <p>
                    Let’s make precious memories — let’s explore the world together!
                </p>
            </>
        ),
        location: "Grand Atrium Pakuwon Mall Surabaya",
        date: "20 – 23 February 2025",
        highlight: {
            type: "video",
            url: "/images/event/4.mp4"
        }
    },

    "Home Sweet Home": {
        name: "Home Sweet Home",
        description: (
            <>
                <p>
                    Find everything you need for your dream home at the Home Sweet Home Event, PTC Surabaya! Discover the most complete home appliance, home decor, and home tech exhibition in Surabaya, featuring dozens of top brands!
                </p>
                <p>
                    Get inspired for your next renovation and find the best household essentials — all in one place! Don’t miss the chance to make your dream home a reality!
                </p>
            </>
        ),
        location: "Main Atrium LG Floor, Pakuwon Trade Center (PTC), Surabaya",
        date: "7 – 16 March 2025",
        highlight: {
            type: "video",
            url: "/images/event/5.mp4"
        }
    },

    "Kaka Jeweluxe": {
        name: "Kaka Jeweluxe",
        description: (
            <>
                <p>
                    At Kaka Jeweluxe, each piece is a testament to timeless elegance and exceptional craftsmanship!
                </p>
                <p>
                    Discover their curated collection of Silver 925 accessories that add a touch of sophistication to any occasion! Inspired by YOU, they’re inviting you to Shine with Kaka Jeweluxe!
                </p>
            </>
        ),
        location: "Tunjungan Plaza 3, Lv.6, Surabaya",
        date: "21 – 23 March 2025",
        highlight: {
            type: "video",
            url: "/images/event/6.mp4"
        }
    },

    "Kepo Asian Culinary": {
        name: "Kepo Asian Culinary",
        description: (
            <>
                <p>
                    Yu-I Kitchen, the ultimate paradise for non-halal food lovers! Indulge in the rich flavors of Pork Leg Rice and Complete Mixed Rice that will keep you coming back for more!
                </p>
                <p>
                    Every bite is bursting with taste — perfect for those craving bold and flavorful dishes!
                </p>
            </>
        ),
        location: "Atrium Galaxy Mall 3, Surabaya",
        date: "18 – 23 February 2025",
        highlight: {
            type: "video",
            url: "/images/event/7.mp4"
        }
    }
};
