import { ReactNode, useRef, useState } from "react";

export interface IAccordionDetail {
    title: string;
    content: ReactNode;
}

export default function AccordionDetail({ list = [] }: Readonly<{ list?: IAccordionDetail[] }>) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full flex flex-col">
            {list?.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div key={'accordion.detail' + item.title} className="overflow-hidden">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex gap-4 cursor-pointer items-center transition px-2 py-4"
                        >
                            <svg className={`transform transition-transform ${isOpen ? "rotate-90" : ""}`} width="19" height="29" viewBox="0 0 19 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.1463 12.4208L3.89575 0.545268C3.4113 0.144545 2.7878 -0.0478737 2.16178 0.0101484C1.53576 0.0681705 0.958241 0.371905 0.555694 0.854838C0.153147 1.33777 -0.0416221 1.96054 0.0140383 2.58678C0.0696987 3.21301 0.371252 3.79167 0.852663 4.19604L12.9137 14.2462L0.852663 24.2965C0.369397 24.7003 0.066177 25.2794 0.00961181 25.9066C-0.0469534 26.5338 0.147762 27.1578 0.550986 27.6416C0.954209 28.1253 1.53296 28.4292 2.16011 28.4866C2.78726 28.5439 3.41152 28.3499 3.89575 27.9473L18.1463 16.0716C18.4136 15.8483 18.6285 15.5691 18.776 15.2537C18.9235 14.9383 18.9999 14.5944 18.9999 14.2462C18.9999 13.898 18.9235 13.554 18.776 13.2386C18.6285 12.9232 18.4136 12.644 18.1463 12.4208Z" fill="black" />
                            </svg>
                            <span className="font-bold text-2xl">{item.title}</span>
                        </button>
                        <div
                            ref={el => {
                                contentRefs.current[index] = el;
                            }}
                            style={{
                                height: isOpen
                                    ? `${contentRefs.current[index]?.scrollHeight}px`
                                    : "0px",
                            }}
                            className="transition-all duration-300 ease-in-out pl-10 overflow-hidden font-semibold text-base"
                        >
                            <div className="pb-4 w-full">
                                {item.content}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
