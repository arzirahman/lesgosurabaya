import { Router } from 'express';
import { favouriteAndLike, isFavourite, isLike, toggleFavourite, toggleLike } from '../controllers/contentController';

const contentRoute = Router();

contentRoute.post('/like', toggleLike);
contentRoute.post('/is-like', isLike);

contentRoute.post('/favourite', toggleFavourite);
contentRoute.post('/is-favourite', isFavourite);

contentRoute.get('/favourite-and-like', favouriteAndLike);

export default contentRoute;