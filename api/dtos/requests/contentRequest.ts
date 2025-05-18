export interface ToggleLikeRequest {
    post: string;
    image: string;
    hasDetail: boolean;
    isEvent: boolean;
}

export interface ToggleFavouriteRequest {
    post: string;
    image: string;
    hasDetail: boolean;
    isEvent: boolean;
}

export interface CommentRequest {
    post: string;
    description: string;
}

export interface RateRequest {
    rate: number;
    post: string;
}