import express from 'express';
import { exception } from './middlewares/exception';
import userRoute from './routes/userRoute';
import contentRoute from './routes/contentRoute';
import { auth } from './middlewares/auth';

const appRouter = express.Router();

appRouter.use(express.json());

appRouter.use(userRoute);

appRouter.use(auth);
appRouter.use(contentRoute);

appRouter.use(exception);

export default appRouter;
