import { useCallback, useEffect, useRef, useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { HttpResponse, request } from "../../utils/request";
import { AxiosError } from "axios";
import { setAlert } from "../../redux/general-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface IComment {
    post?: string;
}

interface User {
    name: string;
    profile: string | null;
}

interface Comment {
    id: number;
    description: string;
    createdAt: string;
    user: User;
}

type Comments = Comment[];

export default function Comment({ post }: Readonly<IComment>) {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState<Comments>([]);

    const handleReply = (name: string) => {
        const mention = `@${name} `;

        if (!inputValue.includes(mention)) {
            setInputValue((prev) => prev + mention);
        }

        inputRef.current?.focus();
    };

    const getComment = useCallback(async () => {
        try {
            const response = await request().get(`/comment?post=${post}`);
            setComments(response.data?.data ?? []);
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                const errorResponse = error.response?.data as HttpResponse<any>;
                dispatch(setAlert({ type: 'error', message: errorResponse.message, visibility: true }));
            } else {
                dispatch(setAlert({ type: 'error', message: 'Internal server error', visibility: true }));
            }
        }
    }, [post])

    useEffect(() => {
        getComment();
    }, [post])

    useEffect(() => {
        if (inputRef.current) {
            const textarea = inputRef.current;
            const lineHeight = 24;

            textarea.style.height = "auto";

            const lines = inputValue.split('\n').length;

            if (lines <= 1) {
                textarea.style.height = lineHeight + "px";
            } else {
                textarea.style.height = textarea.scrollHeight + "px";
            }
        }
    }, [inputValue]);

    const pushComment = async (description: string) => {
        const token = Cookies.get('lesgosurabaya') ?? null;
        if (!token) return navigate('/sign-in');
        if (loading) return;
        setLoading(true);
        try {
            await request().post("/comment", {
                post,
                description
            });
            getComment();
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                const errorResponse = error.response?.data as HttpResponse<any>;
                dispatch(setAlert({ type: 'error', message: errorResponse.message, visibility: true }));
            } else {
                dispatch(setAlert({ type: 'error', message: 'Internal server error', visibility: true }));
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full pb-[70px]">
            <div className="w-full max-w-[1440px] mx-auto px-[100px] flex flex-col gap-[12px]">
                <span className="font-bold text-[28px]">Comments</span>
                {comments.length > 0 && <div className="flex flex-col w-full gap-[12px] overflow-auto max-h-[344px]">
                    {comments.map((comment) => (
                        <div key={"comment." + comment.id} className="flex flex-col px-[30px] py-[14px] bg-[#0C2A740D] rounded-[20px] gap-[12px]">
                            <div className="flex items-center gap-2">
                                <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                                    <img alt="" src={comment.user.profile ?? '/images/profile.jpg'} className='w-full h-full object-cover object-center' />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xs font-bold'>{comment.user.name}</span>
                                    <span className='text-xs'>{dayjs(comment.createdAt).fromNow()}</span>
                                </div>
                            </div>
                            <div className='w-full font-medium text-sm whitespace-pre-wrap'>
                                {comment.description}
                            </div>
                            <div>
                                <button
                                    className='font-bold text-xs text-[#0C2A74] cursor-pointer'
                                    onClick={() => handleReply(comment.user.name)}
                                >
                                    Reply
                                </button>
                            </div>
                        </div>
                    ))}
                </div>}
                <div className="w-full flex items-end font-medium text-[14px] bg-[#0C2A740D] rounded-[20px] px-[30px] py-[18px]">
                    <textarea
                        ref={inputRef}
                        placeholder="Enter Your Comment"
                        className="flex-1 pr-[20px] placeholder:text-[12px] outline-none resize-none no-scrollbar bg-transparent align-middle"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                setInputValue("");
                                pushComment(inputValue.trim())
                            }
                        }}
                    />
                    <button onClick={() => {
                        setInputValue("");
                        pushComment(inputValue.trim())
                    }} className="bg-[#0C2A74] w-[44px] h-[30px] rounded-[20px] flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110 ease-in-out active:scale-100">
                        <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_581_1426)">
                                <path d="M16 2.00733L16 19.8823" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 2.00732L21 4.75732" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 2.00732L11 4.75732" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_581_1426">
                                    <rect width="22" height="32" fill="white" transform="translate(0 22) rotate(-90)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
