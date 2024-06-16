import { Prisma } from "@prisma/client";
import { UserEntityReponse } from "../../users";

type PostWithAuthor = Prisma.PostGetPayload<{
  include: { author: true };
}>;

export interface PostEntity extends PostWithAuthor {}

type OmitSafe<T, U extends keyof T> = Omit<T, U>;
type ExcludedEntity = OmitSafe<PostEntity, 'published'>;
type Overwrite<T, U extends { [Key in keyof T]?: unknown }> = Omit<T, keyof U> & U;
type OverwritedEntity = Overwrite<ExcludedEntity, { author: UserEntityReponse }>;
export type PostEntityResponse = OverwritedEntity;
