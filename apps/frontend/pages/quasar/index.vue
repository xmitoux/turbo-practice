<script setup>
const text = ref('');
</script>

<template>
  <div class="q-pa-lg hidden">
    <div class="q-gutter-md" style="max-width: 300px">
      <QInput v-model="text" label="test" />
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
        col1
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
        col2
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
        col3
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
