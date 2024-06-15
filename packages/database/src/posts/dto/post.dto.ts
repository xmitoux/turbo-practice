import { Prisma } from "@prisma/client";

export interface PostCreateDto extends Prisma.PostCreateInput {}
export interface PostUpdateDto extends Prisma.PostUpdateInput {}
