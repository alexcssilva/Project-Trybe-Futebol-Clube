import { Router } from 'express';
import { validateEmail, validatePassword } from '../../middleware/validateLogin';
import { UserFactory } from '../../factory'

const userRouter = Router();

userRouter.post('/login', validateEmail, validatePassword, (req, res, next) => {
  UserFactory().login(req, res, next);
});

export default userRouter;