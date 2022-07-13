import { Router } from 'express';
import { validateEmail } from '../../middleware/validateLogin';
import { UserFactory } from '../../factory'

const userRouter = Router();

userRouter.post('/login', validateEmail, (req, res, next) => {
  UserFactory().login(req, res, next);
});

export default userRouter;