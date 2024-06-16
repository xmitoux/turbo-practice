import type { UserEntity as User } from '@repo/database';

import { PostEntity } from '@/modules/posts/entities/post.entity';
import { Exclude, Expose } from 'class-transformer';

export class UserEntity implements User {
  email: string;

  id: number;

  name: string;

  @Exclude()
  password: string;

  posts: PostEntity[];

  constructor({ posts, ...data }: Partial<UserEntity>) {
    Object.assign(this, data);

    if (posts) {
      this.posts = posts.map(post => new PostEntity(post));
    }
  }

  @Expose()
  get nameWithEmail(): string {
    return `${this.name}(${this.email})`;
  }
}
