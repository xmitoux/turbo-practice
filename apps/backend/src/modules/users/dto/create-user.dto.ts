import type { UserCreateDto as Dto } from '@repo/database';

import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserCreateDto implements Dto {
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
