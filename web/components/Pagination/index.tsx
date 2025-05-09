import { useEffect, useState } from 'react';
import { IExploreCard } from '../ExploreCard';
import { useSearchParams } from 'react-router-dom';

interface IPagination {
    data: IExploreCard[];
    itemsPerPage?: number;
    onChange?: (paginatedData: IExploreCard[]) => void;
    search?: string;
}

export default function Pagination({
    data,
    itemsPerPage = 8,
    onChange,
    search
}: Readonly<IPagination>) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState<number>(() => {
        const paramPage = parseInt(searchParams.get('page') ?? '1', 10);
        return isNaN(paramPage) ? 1 : paramPage;
    });
    const totalPages = Math.ceil(data.length / itemsPerPage);

    useEffect(() => {
        const paramPage = parseInt(searchParams.get('page') ?? '1', 10);
        const safePage = isNaN(paramPage) ? 1 : Math.min(paramPage, totalPages || 1);
        setPage(safePage);
    }, [data]);

    useEffect(() => {
        const paginated = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);
        onChange?.(paginated);

        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
    
            if (search) {
                params.set("search", search);
            } else {
                params.delete("search");
            }
    
            if (page > 1) {
                params.set("page", page.toString());
            } else {
                params.delete("page");
            }
    
            return params;
        });
    }, [page, data, itemsPerPage, search]);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto text-center py-10">
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className={`text-2xl ${page === 1 ? 'text-[#C4C4C4]' : 'text-black'} cursor-pointer`}
                >
                    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.539151 7.8469L9.53953 0.346577C9.84549 0.0934888 10.2393 -0.0280388 10.6347 0.00860678C11.03 0.0452523 11.3948 0.237085 11.649 0.542095C11.9033 0.847105 12.0263 1.24044 11.9911 1.63595C11.956 2.03147 11.7655 2.39694 11.4615 2.65233L3.84398 8.99983L11.4615 15.3473C11.7667 15.6024 11.9582 15.9681 11.9939 16.3643C12.0297 16.7604 11.9067 17.1545 11.652 17.46C11.3973 17.7656 11.0318 17.9575 10.6357 17.9937C10.2396 18.0299 9.84536 17.9074 9.53953 17.6531L0.539151 10.1527C0.370388 10.0117 0.234636 9.83533 0.141484 9.63612C0.0483322 9.43692 5.24521e-05 9.21969 5.24521e-05 8.99978C5.24521e-05 8.77987 0.0483322 8.56264 0.141484 8.36343C0.234636 8.16422 0.370388 7.9879 0.539151 7.8469Z" fill="#C4C4C4" />
                    </svg>
                </button>

                {Array.from({ length: totalPages }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                        <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`text-xl font-semibold ${page === pageNum ? 'text-black' : 'text-[#C4C4C4]'} cursor-pointer`}
                        >
                            {pageNum}
                        </button>
                    );
                })}

                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                    className={`text-2xl font-semibold ${page === totalPages ? 'text-[#C4C4C4]' : 'text-black'} cursor-pointer`}
                >
                    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4608 7.8469L2.46047 0.346577C2.15451 0.0934888 1.76072 -0.0280388 1.36533 0.00860678C0.969953 0.0452523 0.605205 0.237085 0.350965 0.542095C0.0967243 0.847105 -0.0262876 1.24044 0.00886631 1.63595C0.0440203 2.03147 0.234475 2.39694 0.538524 2.65233L8.15602 8.99983L0.538524 15.3473C0.233303 15.6024 0.041796 15.9681 0.00607062 16.3643C-0.0296548 16.7604 0.0933237 17.1545 0.347991 17.46C0.602658 17.7656 0.968187 17.9575 1.36428 17.9937C1.76038 18.0299 2.15464 17.9074 2.46047 17.6531L11.4608 10.1527C11.6296 10.0117 11.7654 9.83533 11.8585 9.63612C11.9517 9.43692 11.9999 9.21969 11.9999 8.99978C11.9999 8.77987 11.9517 8.56264 11.8585 8.36343C11.7654 8.16422 11.6296 7.9879 11.4608 7.8469Z" fill="#C4C4C4" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
