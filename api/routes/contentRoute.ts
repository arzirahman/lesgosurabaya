import { Router } from 'express';
import { favouriteAndLike,
    getComment,
    getRate,
    getSummaryRate,
    isFavourite,
    isLike,
    pushComment,
    pushRate,
    toggleFavourite,
    toggleLike 
} from '../controllers/contentController';
import { auth } from '../middlewares/auth';

const contentRoute = Router();

contentRoute.get('/comment', getComment);
contentRoute.get('/summary-rate', getSummaryRate);

contentRoute.use(auth);

contentRoute.post('/like', toggleLike);
contentRoute.post('/is-like', isLike);

contentRoute.post('/favourite', toggleFavourite);
contentRoute.post('/is-favourite', isFavourite);

contentRoute.get('/favourite-and-like', favouriteAndLike);

contentRoute.post('/comment', pushComment);

contentRoute.get('/rate', getRate);
contentRoute.post('/rate', pushRate);

export default contentRoute;