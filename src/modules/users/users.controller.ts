import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
