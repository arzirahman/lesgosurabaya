import { NextFunction, Request, Response } from "express";
import { SignInRequest, SignUpRequest } from "../dtos/requests/userRequest";
import { HttpResponse } from "../dtos/HttpResponse";
import validator from 'validator';

const validateEmail: (email: string) => string | null  = (email: string) => {
    let message: string | null = null;
    if (!email) {
        message = "Parameter email harus di isi";
    } else if (!validator.isEmail(email)) {
        message = "Parameter email tidak sesuai format";
    }
    return message
}

const validatePassword: (password: string) => string | null  = (password: string) => {
    let message: string | null = null;
    if (!password) {
        message = "password harus di isi";
    }
    return message
}

export const signUpValidation = (req: Request<SignUpRequest>, res: Response, next: NextFunction) => {
    const { email, password, name } = req.body as SignUpRequest;
    const errorResponse: HttpResponse<any> = {
        status: 400,
        message: '',
        data: null
    }

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError) {
        errorResponse.message = emailError;
    }  else if (!name){
        errorResponse.message = "nama harus di isi";
    } else if (passwordError){
        errorResponse.message = passwordError
    }

    if (errorResponse.message) {
        res.status(400).json(errorResponse);
    } else {
        next();
    }
}

export const signInValidation = (req: Request<SignInRequest>, res: Response, next: NextFunction) => {
    const { email, password } = req.body as SignInRequest;
    const errorResponse: HttpResponse<any> = {
        status: 102,
        message: '',
        data: null
    }

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError) {
        errorResponse.message = emailError;
    } else if (passwordError){
        errorResponse.message = passwordError
    }

    if (errorResponse.message){
        res.status(400).json(errorResponse);
    } else {
        next();   
    }
}