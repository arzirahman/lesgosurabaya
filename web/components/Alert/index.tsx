
import { useDispatch, useSelector } from "react-redux";
import { JSX, useEffect } from "react";
import { setAlert } from "../../redux/general-slice";
import { AppDispatch, RootState } from "../../redux/store";
import { capitalize } from '../../../utils/general';

export interface AlertData {
    message?: string;
    type?: "info" | "warning" | "error" | "success";
    visibility?: boolean;
}

export default function Alert() {
    const alertData = useSelector((state: RootState) => state.general.alertData);
    const dispatch = useDispatch<AppDispatch>();

    let alertIcon: JSX.Element = (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 34.5C27.1127 34.5 34.5 27.1127 34.5 18C34.5 8.8873 27.1127 1.5 18 1.5C8.8873 1.5 1.5 8.8873 1.5 18C1.5 27.1127 8.8873 34.5 18 34.5Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.5 17.06L15.17 22.72L26.5 13.28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
    let alertClass: string;
    if (alertData?.type === "info") {
        alertClass = 'alert-info';
    } else if (alertData?.type === "warning") {
        alertClass = 'alert-warning';
    } else if (alertData?.type === "error") {
        alertClass = 'bg-[#C73A30]';
        alertIcon = (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_419_2272)">
                    <path d="M18 0C8.0736 0 0 8.0736 0 18C0 27.9264 8.0736 36 18 36C27.9264 36 36 27.9264 36 18C36 8.0736 27.9264 0 18 0ZM18 33.6C9.3984 33.6 2.4 26.6016 2.4 18C2.4 9.3984 9.3984 2.4 18 2.4C26.6016 2.4 33.6 9.3984 33.6 18C33.6 26.6016 26.6016 33.6 18 33.6Z" fill="white" />
                    <path d="M24.3502 9.95038L17.9998 16.3032L11.6494 9.95038L9.9502 11.6496L16.303 18L9.9502 24.3504L11.6494 26.0496L17.9998 19.6968L24.3502 26.0496L26.0494 24.3504L19.6966 18L26.0494 11.6496L24.3502 9.95038Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_419_2272">
                        <rect width="36" height="36" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    } else {
        alertClass = 'bg-[#3CE000]';
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (alertData) {
            timeout = setTimeout(() => {
                dispatch(setAlert({ ...alertData, visibility: false }));
            }, 1500);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [alertData])

    return (
        <div className={`${alertData?.visibility ? 'translate-y-0' : 'translate-y-full'} text-white transition-all duration-300 left-[25%] fixed bottom-0 z-40 flex justify-center w-full`}>
            <div role="alert" className={`alert ${alertClass} max-w-[25rem] h-[130px] rounded-t-[20px] p-[20px] w-[473px]`}>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        {alertIcon}
                        <span className="font-semibold text-2xl">{capitalize(alertData?.type ?? '')}</span>
                    </div>
                    <span className="text-[15px] font-semibold">{alertData?.message}</span>
                </div>
            </div>
        </div>
    )
}