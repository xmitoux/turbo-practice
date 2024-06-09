import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';

export class CreateImageDto implements Prisma.ImageCreateInput {
  @IsString()
  fileName: string;
}

export type CreateImageDtoRequest = CreateImageDto;
