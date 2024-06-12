import { Prisma } from '@repo/database';
import { IsString } from 'class-validator';

export class CreateImageDto implements Prisma.ImageCreateInput {
  @IsString()
  fileName: string;
}

export type CreateImageDtoRequest = CreateImageDto;
