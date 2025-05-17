import { Router } from 'express';
import { favouriteAndLike, getComment, isFavourite, isLike, pushComment, toggleFavourite, toggleLike } from '../controllers/contentController';
import { auth } from '../middlewares/auth';

const contentRoute = Router();

contentRoute.get('/comment', getComment);

contentRoute.use(auth);

contentRoute.post('/like', toggleLike);
contentRoute.post('/is-like', isLike);

contentRoute.post('/favourite', toggleFavourite);
contentRoute.post('/is-favourite', isFavourite);

contentRoute.get('/favourite-and-like', favouriteAndLike);

contentRoute.post('/comment', pushComment);

export default contentRoute;