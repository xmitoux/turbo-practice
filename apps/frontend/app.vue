<script setup lang="ts">
const NuxtPwaManifest = process.env.NODE_ENV === 'production'
  ? resolveComponent('NuxtPwaManifest')
  : 'div';
</script>

<template>
  <div>
    <component :is="NuxtPwaManifest" />
    <NuxtPage />
  </div>
</template>
