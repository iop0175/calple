import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { User, UserDocument} from './schema/users.schema';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
    
      async create(user: User): Promise<User> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
      }
      
      async findByIdAndPw(userid:string,password:string):Promise<User|null>{
        return this.userModel.findOne({userid,password}).exec();
      }
      async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
      }
}
