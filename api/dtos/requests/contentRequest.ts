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