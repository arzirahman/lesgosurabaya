import { Favourite, Like } from "@prisma/client";
import { HttpResponse } from "../HttpResponse";

export interface ToggleLikeResponseData {
    like: boolean;
}

export type ToggleLikeResponse = HttpResponse<ToggleLikeResponseData>;

export interface ToggleFavouriteResponseData {
    favourite: boolean;
}

export type ToggleFavouriteResponse = HttpResponse<ToggleFavouriteResponseData>;

export interface FavouroteAndLikeResponseData {
    favourite: Favourite[];
    like: Like[];
    user: {
        name: string;
        profile: string;
    }
}

export type FavouroteAndLikeResponse = HttpResponse<FavouroteAndLikeResponseData>;

export interface RateSummaryResponseData {
    average: number,
    total: number,
    profiles: (string | null)[],
}

export type RateSummaryResponse = HttpResponse<RateSummaryResponseData>;