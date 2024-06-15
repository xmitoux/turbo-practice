<script setup lang="ts">
import type { Prisma } from '@repo/database';

const { data: users } = await findUsersApi();

const name = ref('');
const email = ref('');
const password = ref('');

const createUser = async () => {
  const user: Prisma.UserCreateInput = {
    email: email.value,
    name: name.value,
    password: password.value,
  };

  await createUserApi(user);
};
</script>

<template>
  <div>
    <template v-for="user in users" :key="user.id">
      <h1>Hello {{ user.name }}! Your id is {{ user.id }}, and email is {{ user.email }}!!</h1>
    </template>

    <div>
      <input v-model="email" placeholder="email">
    </div>
    <div>
      <input v-model="name" placeholder="name">
    </div>
    <div>
      <input v-model="password" placeholder="password">
    </div>

    <button @click="createUser">
      create user
    </button>
  </div>
</template>
