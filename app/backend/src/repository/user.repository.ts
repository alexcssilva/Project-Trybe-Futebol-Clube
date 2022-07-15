import Model from '../database/models/user.model';
import { IUser, IUserModel } from '../protocols/user.protocol';

class UserRepository implements IUserModel{
  constructor(private model = Model){
    this.model = model;
  };

  findUser = async (email: string): Promise<IUser | null> => {
    const user = await this.model.findOne({ where: { email } });

    return user;
  }
  
  findRole = async (password: string): Promise<IUser | null> => {
    const role = await this.model.findOne({ where: { password }, 
      attributes: { exclude: ['id', 'username', 'email', 'password']} });
    
    return role;
  }
};

export default UserRepository;