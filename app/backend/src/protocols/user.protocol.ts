export interface IUser {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
};

export interface IUserModel {
  findUser(email: string): Promise<IUser | null>;
  findRole(password: string): Promise<IUser | null>;
};

export interface Ilogin {
  email: string;
};

export interface IUserService {
  login(email: string, password: string): Promise<string | boolean>;
  role(authorization: string | undefined): Promise<IUser | null>;
};

