import { Request, Response, NextFunction } from "express";

export function validateEmail (req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ message: 'All fields must be filled' });
      next();
    }
  } catch (error) {
    next(error);
  }
}
