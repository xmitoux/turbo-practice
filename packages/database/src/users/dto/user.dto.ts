import { Prisma } from "@prisma/client";

export interface UserCreateDto extends Prisma.UserCreateInput {}
export interface UserUpdateDto extends Prisma.UserUpdateInput {}
