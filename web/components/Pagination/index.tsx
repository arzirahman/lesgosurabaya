import { useEffect } from 'react';
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

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paramPage = parseInt(searchParams.get('page') ?? '1', 10);
    const currentPage = isNaN(paramPage) ? 1 : Math.min(paramPage, totalPages || 1);

    useEffect(() => {
        const paginated = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
        onChange?.(paginated);
    }, [currentPage, data, itemsPerPage]);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            const params = new URLSearchParams(searchParams);

            if (search) {
                params.set('search', search);
            } else {
                params.delete('search');
            }

            if (newPage > 1) {
                params.set('page', newPage.toString());
            } else {
                params.delete('page');
            }

            const oldParams = searchParams.toString();
            const newParams = params.toString();

            if (oldParams !== newParams) {
                setSearchParams(params);
            }
        }
    };

    return (
        <div className="w-full max-w-md mx-auto text-center py-10">
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`text-2xl ${currentPage === 1 ? 'text-[#C4C4C4]' : 'text-black cursor-pointer'}`}
                >
                    &lt;
                </button>

                {Array.from({ length: totalPages }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                        <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`text-xl font-semibold ${currentPage === pageNum ? 'text-black' : 'text-[#C4C4C4] cursor-pointer'}`}
                        >
                            {pageNum}
                        </button>
                    );
                })}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`text-2xl font-semibold ${currentPage === totalPages ? 'text-[#C4C4C4]' : 'text-black cursor-pointer'}`}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
