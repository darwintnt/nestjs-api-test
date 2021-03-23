import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthRepository } from './repositories/auth.repository';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup.dto';
import { User } from '../users/schemas/user.schema';
import { SigninDto } from './dto/signin.dto';
import { compare } from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';
import { JwtPayloadI } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async signup(data: SignupDto): Promise<User> {
    const { email } = data;
    const userExist = await this.authRepository.getUserbyEmail(email);

    if (userExist) {
      throw new ConflictException(`Email ${email} already exists!`);
    }

    return this.authRepository.signup(data);
  }

  async signin(data: SigninDto): Promise<{ token: string }> {
    const { email, password } = data;
    const user: User = await this.authRepository.getUserbyEmail(email);

    if (!user) {
      throw new NotFoundException('User does not exist!');
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayloadI = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    };

    const token = await this.jwtService.sign(payload);

    return { token };
  }
}
