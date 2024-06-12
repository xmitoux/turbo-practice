import { Prisma } from '@repo/database';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePostDto implements Prisma.PostCreateInput {
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
