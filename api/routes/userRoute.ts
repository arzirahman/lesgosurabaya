import { Router } from 'express';
import { signInValidation, signUpValidation } from '../validations/userValidation';
import { changeAvatar, changeName, profile, signIn, signUp } from '../controllers/userController';
import { auth } from '../middlewares/auth';

const userRoute = Router();

userRoute.post('/sign-up', signUpValidation, signUp);
userRoute.post('/sign-in', signInValidation, signIn);

userRoute.get('/profile', auth, profile);
userRoute.post('/change-avatar', auth, changeAvatar);
userRoute.post('/change-name', auth, changeName);

export default userRoute;