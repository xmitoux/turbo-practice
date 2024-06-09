import type { Image } from '@prisma/client';

import { OmitSafe, Overwrite } from '@/common/utils/util-types';
import { PlayRecordEntity, PlayRecordEntityResponse } from '@/play_records/entities/play_record.entity';
import { Exclude, Expose } from 'class-transformer';

export class ImageEntity implements Image {
  @Exclude()
  fileName: string;

  id: number;

  playRecords: PlayRecordEntity[];

  constructor({ playRecords, ...data }: ImageEntity) {
    Object.assign(this, data);
    this.playRecords = playRecords.map(playRecord => new PlayRecordEntity(playRecord));
  }

  @Expose()
  get fileUrl(): string {
    return `${process.env.FILE_URL_BASE}/${this.fileName}`;
  }
}

// レスポンスEntityから不要なプロパティをExclude
type ExludedEntity = OmitSafe<ImageEntity, 'fileName'>;
// 紐付くEntityもレスポンスEntityに変える
type OverwritedEntity = Overwrite<ExludedEntity, { playRecords: PlayRecordEntityResponse }>;

export type ImageEntityResponse = OverwritedEntity;
