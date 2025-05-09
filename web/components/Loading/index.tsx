import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Loading() {
    const loading = useSelector((state: RootState) => state.general.loading);

    return (
        <div className={`${loading.length > 0 ? '' : 'hidden'} w-full h-2 z-[100] fixed inset-0 bg-gray-300 overflow-hidden rounded-full`}>
            <div className="absolute top-0 left-0 h-full bg-[#0C2A74] animate-grow-shrink rounded-full"></div>
        </div>
    )
}