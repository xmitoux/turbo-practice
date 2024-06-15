import type { UserCreateDto, UserEntityReponse } from '@repo/database';

export const createUserApi = async (body: UserCreateDto) => {
  return $fetch<UserEntityReponse>('/api/users', { body, method: 'post' });
};

export const findUsersApi = async () => {
  return useFetch<UserEntityReponse[]>('/api/users');
};
