import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async getUsers(): Promise<User[]> {
    return this.UserModel.find();
  }

  async getUser(userId: string): Promise<User> {
    return this.UserModel.findById(userId);
  }

  async updateUser(user: UserDto, userId: string): Promise<User> {
    return this.UserModel.findByIdAndUpdate(userId, user, { new: true });
  }

  async deleteUser(userId: string): Promise<User> {
    return this.UserModel.findByIdAndRemove(userId);
  }

  async getUserbyEmail(email: string): Promise<User> {
    return this.UserModel.findOne({ email: email, is_active: true });
  }
}
