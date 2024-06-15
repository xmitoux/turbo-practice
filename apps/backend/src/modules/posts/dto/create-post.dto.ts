import type { PostCreateDto as Dto } from '@repo/database';

import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class PostCreateDto implements Dto {
  @IsOptional()
  @IsNumber()
  authorId: number;

  @IsOptional()
  @IsString()
  content?: string;

  @IsNotEmpty()
  @IsString()
  title: string;
}
