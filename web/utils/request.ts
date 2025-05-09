import axios from "axios";
import { setLoading } from "../redux/general-slice";
import { store } from "../redux/store";
import Cookies from 'js-cookie';

export interface Pagination<Data> {
    offset: number;
    limit: number;
    records: Data;
}

export interface HttpResponse<Data> {
    status?: number;
    message?: string;
    data?: Data | null | Pagination<Data>;
}

type IRequest = {
    noLoading?: boolean
}

export const request = (input?: IRequest) => {
    const axiosInstance = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000/api',
        withCredentials: true,
        headers: {
            Authorization: 'Bearer ' + (Cookies.get('lesgosurabaya') ?? null)
        }
    });
    axiosInstance.interceptors.request.use(
        function (config) {
            !input?.noLoading && store.dispatch(setLoading(true))
            return Promise.resolve(config);
        },
        function (error) {
            !input?.noLoading && store.dispatch(setLoading(false))
            return Promise.reject(error instanceof Error ? error : new Error(error));
        },
    );    
    axiosInstance.interceptors.response.use(
        (response) => {
            !input?.noLoading && store.dispatch(setLoading(false))
            return Promise.resolve(response) 
        },
        async (error) => {
            !input?.noLoading && store.dispatch(setLoading(false))
            return Promise.reject(error instanceof Error ? error : new Error(error));
        }
    )
    return axiosInstance;
}