import { Prisma } from '@repo/database';
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
