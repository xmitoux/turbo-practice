import type { PlayRecord } from '@prisma/client';

import { OmitSafe, Overwrite } from '@/common/utils/util-types';
import { ImageEntity, ImageEntityResponse } from '@/images/entities/image.entity';
import { Exclude, Expose } from 'class-transformer';

export class PlayRecordEntity implements PlayRecord {
  endTime: number;
  id: number;
  image: ImageEntity;
  imageId: number;

  @Exclude()
  playTime: number;

  startTime: number;

  constructor({ image, ...data }: PlayRecordEntity) {
    Object.assign(this, data);

    this.image = new ImageEntity(image);
  }

  @Expose()
  get displayPlayTime(): string {
    return `プレイ時間: ${this.playTime} 分`;
  }
}

// レスポンスEntityから不要なプロパティ(フロントに公開しない)をExclude
type ExludedEntity = OmitSafe<PlayRecordEntity, 'playTime'>;
// 紐付くEntityもレスポンスEntityに変える
type OverwritedEntity = Overwrite<ExludedEntity, { image: ImageEntityResponse }>;

export type PlayRecordEntityResponse = OverwritedEntity;
