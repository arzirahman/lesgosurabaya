import express from 'express';
import { exception } from './middlewares/exception';
import userRoute from './routes/userRoute';
import contentRoute from './routes/contentRoute';

const appRouter = express.Router();

appRouter.use(express.json());

appRouter.use(userRoute);

appRouter.use(contentRoute);

appRouter.use(exception);

export default appRouter;
