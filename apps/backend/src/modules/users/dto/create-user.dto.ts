import { Prisma } from '@repo/database';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  @IsEmail()
  @IsNotEmpty()
    email: string;

  @IsString()
  @IsNotEmpty()
    name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
    password: string;
}
