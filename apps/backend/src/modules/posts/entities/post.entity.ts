import type { PostEntity as Post } from '@repo/database';

import { UserEntity } from '@/modules/users/entities/user.entity';
import { Exclude } from 'class-transformer';

export class PostEntity implements Post {
  author: UserEntity;

  authorId: null | number;
  content: null | string;
  id: number;
  @Exclude()
  published: boolean | null;

  title: string;

  constructor({ author, ...data }: Partial<PostEntity>) {
    Object.assign(this, data);

    if (author) {
      this.author = new UserEntity(author);
    }
  }
}
