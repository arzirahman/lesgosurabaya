import { HttpResponse } from "../HttpResponse";

export interface LoginResponseData {
    token: string;
}

export type LoginResponse = HttpResponse<LoginResponseData>;

export interface ProfileResponseData {
    profile: string;
}

export type ProfileResponse = HttpResponse<ProfileResponseData>;