<script setup lang="ts">
import type { UserCreateDto } from '@repo/database';

const { data: users } = await findUsersApi();

const name = ref('');
const email = ref('');
const password = ref('');

const createUser = async () => {
  const user: UserCreateDto = {
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
      <h2>email with name {{ user.nameWithEmail }}</h2>
      <h2>your post title: {{ user.posts[0]?.title }}, content: {{ user.posts[0]?.content }}</h2>
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
