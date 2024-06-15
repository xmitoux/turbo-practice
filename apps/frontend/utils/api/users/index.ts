import type { Prisma, User } from '@repo/database';

export const createUserApi = async (body: Prisma.UserCreateInput) => {
  return $fetch<User>('/api/users', { body, method: 'post' });
};

export const findUsersApi = async () => {
  return useFetch<User[]>('/api/users');
};
