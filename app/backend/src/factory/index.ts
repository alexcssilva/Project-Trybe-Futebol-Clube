import UserRepository from '../repository/user.repository';
import UserService from '../services/users.service';
import UserController from '../controllers/user.controller';

export const UserFactory = () => {
  const repository = new UserRepository();
  const service = new UserService(repository);
  const controller = new UserController(service);

  return controller;
};
