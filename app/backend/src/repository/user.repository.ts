import Model from '../database/models/user.model';
import { IUser, IUserModel } from '../protocols';

class UserRepository implements IUserModel{
  constructor(private model = Model){
    this.model = model;
  };

  findUser = async (email: string): Promise<IUser | null> => {
    const user = await this.model.findOne({ where: { email } });

    return user;
  }
};;

export default UserRepository;