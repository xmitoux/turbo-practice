import type { Prisma } from '@prisma/client';

import { OmitSafe, Overwrite } from '@/common/utils/util-types';
import { ImageEntity, ImageEntityResponse } from '@/modules/images/entities/image.entity';
import { Exclude, Expose } from 'class-transformer';

type PlayRecordsWithImage = Prisma.PlayRecordGetPayload<{
  include: { image: true };
}>;

export class PlayRecordEntity implements PlayRecordsWithImage {
  endTime: number;
  id: number;
  image: ImageEntity;
  imageId: number;

  @Exclude()
  playTime: number;

  startTime: number;

  constructor({ image, ...data }: Partial<PlayRecordEntity>) {
    Object.assign(this, data);

    if (image) {
      this.image = new ImageEntity(image);
    }
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
