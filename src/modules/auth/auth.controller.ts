import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @UsePipes(ValidationPipe)
  signup(@Body() params: SignupDto) {
    return this.authService.signup(params);
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  login(@Body() params: SigninDto) {
    return this.authService.signin(params);
  }
}
