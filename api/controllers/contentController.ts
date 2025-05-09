import { NextFunction, Response } from "express";
import prisma from "../utils/prisma";
import { ToggleFavouriteRequest, ToggleLikeRequest } from "../dtos/requests/contentRequest";
import { AuthenticatedRequest } from "../dtos/requests/authenticateRequest";
import { FavouroteAndLikeResponse, ToggleFavouriteResponse, ToggleLikeResponse } from "../dtos/responses/contentResponse";

export async function toggleLike(req: AuthenticatedRequest<ToggleLikeRequest>, res: Response, next: NextFunction) {
    try {
        const { post, image } = req.body;
        const email = req.data?.email ?? '';

        const existingLike = await prisma.like.findFirst({
            where: {
                post,
                email
            },
        });

        const response: ToggleLikeResponse = {
            status: 200,
            message: "Success",
            data: {
                like: false
            }
        };

        if (existingLike) {
            await prisma.like.delete({
                where: { id: existingLike.id },
            });
            res.json(response);
        } else {
            await prisma.like.create({
                data: {
                    post,
                    email,
                    image
                },
            });
            response.data = {
                like: true
            }
            res.json(response);
        }
    } catch (error: unknown) {
        next(error);
    }
}

export async function isLike(req: AuthenticatedRequest<ToggleLikeRequest>, res: Response, next: NextFunction) {
    try {
        const { post } = req.body;
        const email = req.data?.email ?? '';

        const existingLike = await prisma.like.findFirst({
            where: {
                post,
                email,
            },
        });

        const response: ToggleLikeResponse = {
            status: 200,
            message: "Success",
            data: {
                like: true
            }
        };

        if (existingLike) {
            res.json(response);
        } else {
            response.data = {
                like: false
            }
            res.json(response);
        }
    } catch (error: unknown) {
        next(error);
    }
}

export async function toggleFavourite(req: AuthenticatedRequest<ToggleFavouriteRequest>, res: Response, next: NextFunction) {
    try {
        const { post, image } = req.body;
        const email = req.data?.email ?? '';

        const existingFavourite = await prisma.favourite.findFirst({
            where: {
                post,
                email,
            },
        });

        const response: ToggleFavouriteResponse = {
            status: 200,
            message: "Success",
            data: {
                favourite: false
            }
        };

        if (existingFavourite) {
            await prisma.favourite.delete({
                where: { id: existingFavourite.id },
            });
            res.json(response);
        } else {
            await prisma.favourite.create({
                data: {
                    post,
                    email,
                    image
                },
            });
            response.data = {
                favourite: true
            }
            res.json(response);
        }
    } catch (error: unknown) {
        next(error);
    }
}

export async function isFavourite(req: AuthenticatedRequest<ToggleFavouriteRequest>, res: Response, next: NextFunction) {
    try {
        const { post } = req.body;
        const email = req.data?.email ?? '';

        const existingFavourite = await prisma.favourite.findFirst({
            where: {
                post,
                email,
            },
        });

        const response: ToggleFavouriteResponse = {
            status: 200,
            message: "Success",
            data: {
                favourite: true
            }
        };

        if (existingFavourite) {
            res.json(response);
        } else {
            response.data = {
                favourite: false
            }
            res.json(response);
        }
    } catch (error: unknown) {
        next(error);
    }
}

export async function favouriteAndLike(req: AuthenticatedRequest<any>, res: Response, next: NextFunction) {
    try {
        const email = req.data?.email ?? '';

        const user = await prisma.user.findFirst({
            where: {
                email,
            },
            select: {
                favourites: true,
                likes: true,
                name: true,
                profile: true
            }
        });

        const response: FavouroteAndLikeResponse = {
            status: 200,
            message: "Success",
            data: {
                favourite: user?.favourites ?? [],
                like: user?.likes ?? [],
                user: {
                    name: user?.name ?? '',
                    profile: user?.profile ?? ''
                }
            }
        };

        res.json(response);
    } catch (error: unknown) {
        next(error);
    }
}