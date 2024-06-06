import { Prisma } from '@prisma/client';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto implements Prisma.UserUpdateInput {
  @IsOptional()
  @IsEmail()
    email?: string;

  @IsOptional()
  @IsString()
    name?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
    password?: string;
}
