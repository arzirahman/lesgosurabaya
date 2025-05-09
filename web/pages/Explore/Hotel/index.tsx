import { useEffect, useState } from "react";
import ExploreCard, { IExploreCard } from "../../../components/ExploreCard";
import Pagination from "../../../components/Pagination";
import dummyData from '../../../assets/dummy/hotel.json';
import { useSearchParams } from "react-router-dom";

export default function Hotel() {
    const [searchParams] = useSearchParams();
    const [allData, setAllData] = useState<IExploreCard[]>(dummyData);
    const [pageData, setPageData] = useState<IExploreCard[]>([]);

    const initialSearch = searchParams.get("search") ?? "";
    const [search, setSearch] = useState<string>(initialSearch);

    useEffect(() => {
        const filtered = dummyData.filter((item: IExploreCard) => {
            if (search) {
                const query = search.toLowerCase();
                return (
                    item?.name?.toLowerCase().includes(query) ||
                    item?.location?.toLowerCase().includes(query)
                );
            } else {
                return item;
            }
        });
        setAllData(filtered);
    }, [search]);

    return (
        <>
            <div className='flex bg-[#B8C5C65E] rounded-[20px] w-full items-center'>
                <div className='pl-[25px] pr-[10px]'>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.7056 26.0982L23.3894 20.782C24.4879 19.1265 25.1308 17.1443 25.1308 15.0135C25.1308 9.23966 20.4334 4.5423 14.6596 4.5423C8.88584 4.5423 4.18848 9.23966 4.18848 15.0135C4.18848 20.7872 8.88584 25.4846 14.6596 25.4846C16.7905 25.4846 18.7727 24.8417 20.4282 23.7433L25.7444 29.0595C26.5611 29.8773 27.8889 29.8773 28.7056 29.0595C29.5234 28.2417 29.5234 26.916 28.7056 26.0982ZM7.32982 15.0135C7.32982 10.9716 10.6178 7.68364 14.6596 7.68364C18.7015 7.68364 21.9894 10.9716 21.9894 15.0135C21.9894 19.0553 18.7015 22.3433 14.6596 22.3433C10.6178 22.3433 7.32982 19.0553 7.32982 15.0135Z" fill="#575757" />
                    </svg>
                </div>
                <input value={search} onChange={(e) => { setSearch(e.target.value) }} className='font-bold py-2 pl-[10px] pr-[25px] rounded-r-[20px] text-2xl text-[#575757] w-full' type='text' placeholder={'Explore HOSPITALITY'} />
            </div>
            <div className="w-full grid grid-cols-4 gap-x-[20px] gap-y-[70px] h-[944px]">
                {pageData.map((item, index) => (
                    <ExploreCard key={`Hotel.${item.name}.${index}`} {...item} />
                ))}
            </div>

            <Pagination
                data={allData}
                onChange={(paginatedData) => {
                    setPageData(paginatedData);
                }}
                search={search}
            />
        </>
    );
}
