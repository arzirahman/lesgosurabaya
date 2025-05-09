import { useForm } from 'react-hook-form';
import background from '../../assets/images/home/section2/background.png';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HttpResponse, request } from '../../utils/request';
import { setAlert } from '../../redux/general-slice';
import { AxiosError } from 'axios';
import Input from '../../components/Input';
import Cookies from 'js-cookie';

interface SignInForm {
    email: string;
    password: string;
};

export default function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInForm>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: SignInForm) => {
        if (!loading) {
            setLoading(true);
            try {
                const response = await request().post("/sign-in", data);
                Cookies.set('lesgosurabaya', response.data.data.token, { expires: 30, path: '/' });
                navigate('/');
                dispatch(setAlert({ type: 'success', message: 'Login success', visibility: true }));
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
        }
    };

    return (
        <div className="w-full h-[100svh] pt-[100px]">
            <div className="w-full flex h-full mx-auto">
                <div className="flex-1 h-full">
                    <div className="w-full py-[40px] h-full">
                        <img alt="Sign Up" src="/images/sign-up/background.jpg" className="object-cover object-top rounded-r-[20px] w-full h-full" />
                    </div>
                </div>
                <div className="flex-1 h-full">
                    <div className="p-[40px] w-full h-full flex flex-col items-center justify-center overflow-hidden">
                        <img alt="Lesgosurabaya" src="/images/sign-up/logo.png" className="w-[160px] mb-[40px]" />
                        <span className="font-extrabold text-[48px] leading-[76px] mb-2">Welcome Back</span>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 font-semibold text-2xl text-white relative">
                            <img alt="" src={background} className="absolute top-[-230px] min-w-[600px] right-[-100px] z-[-1]" />
                            <Input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Invalid email"
                                    }
                                })}
                                placeholder="Email Address"
                                errorMessage={errors.email?.message}
                            />
                            <Input
                                {...register("password", { required: "Password is required" })}
                                placeholder="Password"
                                type="password"
                                errorMessage={errors.password?.message}
                            />
                            <button type='submit' disabled={loading} className={`${loading ? 'bg-[#9AAAC6]' : 'cursor-pointer bg-[#0C2A74]'} w-[473px] h-[67px] rounded-[20px] items-center gap-3 flex justify-center text-center`}>
                                {loading && <div
                                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                                >
                                </div>}
                                {loading ? 'Loading...' : 'Sign Ip'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}