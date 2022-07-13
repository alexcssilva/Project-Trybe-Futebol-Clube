import { Request, Response, NextFunction } from "express";

export function validateEmail (req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ message: 'All fields must be filled' });

    }
  } catch (error) {
    next(error);
  }
  next();
}

export function validatePassword (req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;

  try {
    if (!password || password.length < 6) {
      return res.status(400).json({ message: 'All fields must be filled' });

    }
  } catch (error) {
      next(error);
  }
  next();
}
