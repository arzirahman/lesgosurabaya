import { NextFunction, Response } from "express";
import prisma from "../utils/prisma";
import { CommentRequest, RateRequest, ToggleFavouriteRequest, ToggleLikeRequest } from "../dtos/requests/contentRequest";
import { AuthenticatedRequest } from "../dtos/requests/authenticateRequest";
import { FavouroteAndLikeResponse, RateSummaryResponse, ToggleFavouriteResponse, ToggleLikeResponse } from "../dtos/responses/contentResponse";
import { HttpResponse } from "../dtos/HttpResponse";

export async function toggleLike(req: AuthenticatedRequest<ToggleLikeRequest>, res: Response, next: NextFunction) {
    try {
        const { post, image, hasDetail, isEvent } = req.body;
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
                    image,
                    hasDetail: hasDetail ?? false,
                    isEvent: isEvent ?? false
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
        const { post, image, hasDetail, isEvent } = req.body;
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
                    image,
                    hasDetail: hasDetail ?? false,
                    isEvent: isEvent ?? false
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

export async function pushComment(req: AuthenticatedRequest<CommentRequest>, res: Response, next: NextFunction) {
    try {
        const email = req.data?.email ?? '';

        await prisma.comment.create({
            data: {
                email: email,
                post: req.body.post,
                description: req.body.description
            }
        });

        const response: HttpResponse<null> = {
            status: 200,
            message: "Success",
            data: null
        };

        res.json(response);
    } catch (error: unknown) {
        next(error);
    }
}

export async function getComment(req: AuthenticatedRequest<any>, res: Response, next: NextFunction) {
    try {
        const post = req.query.post ?? '';

        const comments = await prisma.comment.findMany({
            where: {
                post: post as string
            },
            select: {
                description: true,
                createdAt: true,
                id: true,
                user: {
                    select: {
                        name: true,
                        profile: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        const response: HttpResponse<any> = {
            status: 200,
            message: "Success",
            data: comments
        };

        res.json(response);
    } catch (error: unknown) {
        next(error);
    }
}

export async function pushRate(req: AuthenticatedRequest<RateRequest>, res: Response, next: NextFunction) {
    try {
        const rate = req.body.rate ?? '';
        const post = req.body.post ?? '';
        const email = req.data?.email ?? '';

        await prisma.rate.upsert({
            where: {
                post_email: {
                    post,
                    email
                }
            },
            update: {
                rate
            },
            create: {
                post,
                email,
                rate
            }
        });

        const response: HttpResponse<null> = {
            status: 200,
            message: "Success",
            data: null
        };

        res.json(response);
    } catch (error: unknown) {
        next(error);
    }
}

export async function getRate(req: AuthenticatedRequest<any>, res: Response, next: NextFunction) {
    try {
        const post = req.query.post ?? '';
        const email = req.data?.email ?? '';

        const rate = await prisma.rate.findFirst({
            where: {
                post: post as string,
                email
            },
            select: {
                rate: true
            }
        })

        const response: HttpResponse<number> = {
            status: 200,
            message: "Success",
            data: rate?.rate ?? 0
        };

        res.json(response);
    } catch (error: unknown) {
        next(error);
    }
}

export async function getSummaryRate(req: AuthenticatedRequest<any>, res: Response, next: NextFunction) {
    try {
        const post = req.query.post ?? '';

        const [aggregate, recentRates] = await Promise.all([
            prisma.rate.aggregate({
                where: { post: post as string },
                _avg: { rate: true },
                _count: { rate: true },
            }),
            prisma.rate.findMany({
                where: { post: post as string },
                orderBy: { createdAt: 'desc' },
                take: 4,
                select: {
                    user: {
                        select: {
                            profile: true
                        }
                    }
                }
            }),
        ]);

        const response: RateSummaryResponse = {
            status: 200,
            message: "Success",
            data: {
                average: aggregate._avg.rate ? Number(aggregate._avg.rate.toFixed(1)) : 0,
                total: aggregate._count.rate,
                profiles: recentRates.map(rates => rates.user.profile),
            }
        };

        res.json(response);
    } catch (error: unknown) {
        next(error);
    }
}