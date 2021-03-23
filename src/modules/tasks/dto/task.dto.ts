import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class TaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  done: boolean;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
