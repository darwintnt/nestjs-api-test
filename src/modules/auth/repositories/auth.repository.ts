import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../users/schemas/user.schema';
import { SignupDto } from '../dto/signup.dto';
import { hash, genSalt } from 'bcrypt';

@Injectable()
export class AuthRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async signup(payload: SignupDto) {
    const { first_name, last_name, email, password } = payload;

    const createUser = new this.userModel();
    const salt = await genSalt(10);
    createUser.first_name = first_name;
    createUser.last_name = last_name;
    createUser.email = email;
    createUser.password = await hash(password, salt);

    return createUser.save();
  }

  async getUserbyEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email: email, is_active: true });
  }
}
