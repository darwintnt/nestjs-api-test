import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUser(userId);
  }

  @Put(':userId')
  updateUser(@Body() user: UserDto, @Param('userId') userId): Promise<User> {
    return this.usersService.updateUser(user, userId);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId): Promise<User> {
    return this.usersService.deleteUser(userId);
  }
}
