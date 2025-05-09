import { useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";


export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full pt-[100px]">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </div>
    )
}