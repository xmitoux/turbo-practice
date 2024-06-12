import { OmitSafe } from '@/common/utils/util-types';
import { Prisma } from '@repo/database';
import { IsNumber } from 'class-validator';

export class CreatePlayRecordDto implements Prisma.PlayRecordCreateInput {
  @IsNumber()
  endTime: number;

  image: Prisma.ImageCreateNestedOneWithoutPlayRecordsInput;

  @IsNumber()
  playTime: number;

  @IsNumber()
  startTime: number;
}

// リクエストDTOから不要なプロパティ(フロントから渡されない)をExclude
export type CreatePlayRecordDtoRequest = OmitSafe<CreatePlayRecordDto, 'playTime'>;
