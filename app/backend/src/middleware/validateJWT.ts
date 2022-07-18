import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import * as jwt from 'jsonwebtoken';

const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization as string;
  const JWT: string = process.env.JWT_SECRET || 'jwt_secret';
  try {
    jwt.verify(token, JWT) as 'jwt.JwtPayload';

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validateJWT;
// Auxiliado por Rafael Jesus - Turma 17
