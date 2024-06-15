import { Prisma } from "@prisma/client";
import { PostEntityResponse } from "../../posts";

type UserWithPosts = Prisma.UserGetPayload<{
  include: { posts: true };
}>;

export interface UserEntity extends UserWithPosts {
  nameWithEmail: string
}

type OmitSafe<T, U extends keyof T> = Omit<T, U>;
type ExcludedEntity = OmitSafe<UserEntity, 'password'>;
type Overwrite<T, U extends { [Key in keyof T]?: unknown }> = Omit<T, keyof U> & U;
type OverwritedEntity = Overwrite<ExcludedEntity, { posts: PostEntityResponse[] }>;
export type UserEntityReponse = OverwritedEntity;
