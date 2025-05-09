import { NextFunction, Request, Response } from "express";
import prisma from "../utils/prisma";
import { SignInRequest, SignUpRequest } from "../dtos/requests/userRequest";
import { comparePassword, createToken, hashPassword } from "../utils/encrypt";
import { HttpResponse } from "../dtos/HttpResponse";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { LoginResponse, ProfileResponse } from "../dtos/responses/userResponse";
import { AuthenticatedRequest } from "../dtos/requests/authenticateRequest";
import { defaultImage } from "../utils/defaultImage";

export async function signUp(req: Request<SignUpRequest>, res: Response, next: NextFunction) {
    try {
        const { email, name, password } = req.body as SignUpRequest;
        const hashedPassword = await hashPassword(password);

        await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });

        const response: HttpResponse<any> = {
            status: 200,
            message: "success",
            data: {
                email, name
            }
        }

        res.json(response);
    } catch (error: unknown) {
        if ((error as PrismaClientKnownRequestError).code === 'P2002') {
            const response: HttpResponse<any> = {
                status: 400,
                message: "Email sudah terdaftar",
                data: null,
            };
            res.status(400).json(response);
            return;
        }
        next(error);
    }
}

export async function signIn(req: Request<SignInRequest>, res: Response, next: NextFunction){
    try {
        const { email, password } = req.body as SignInRequest;  
        const user = await prisma.user.findUnique({
            where: { email },
        });
        const response: LoginResponse = {
            status: 400,
            message: "Username atau password salah",
            data: null
        };
        if (!user) {
            res.status(400).json(response);
        } else {
            const validatePassword = await comparePassword(password, user.password);
            if (!validatePassword) {
                res.status(400).json(response);
            } else {
                const token = createToken({ email: user.email });
                response.data = { token };
                response.message = "sukses";
                response.status = 200;
                res.json(response);
            }
        }
    } catch (error: unknown) {
        next(error);
    }
}

export async function profile(req: AuthenticatedRequest<any>, res: Response, next: NextFunction){
    try {
        const email = req.data?.email ?? '';

        const user = await prisma.user.findFirst({
            where: {
                email
            }
        });

        const response: ProfileResponse = {
            status: 200,
            message: "Success",
            data: null
        };

        if (!user?.profile) {
            response.data = {
                profile: defaultImage
            }
        } else {
            response.data = {
                profile: user.profile
            }
        }

        res.json(response);
    } catch (error: unknown) {
        next(error);
    }
}
