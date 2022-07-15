import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { IUser } from '../protocols/user.protocol';

function generateJWT(payload: Omit<IUser, 'password'>) {
  const secret = process.env.JWT_SECRET || 'jwt_secret';

  const jwtConfig: object = {
    expiresIn: '10h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ payload }, secret, jwtConfig);

  return token;
}

export default generateJWT;