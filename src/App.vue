<script setup>
  import {useUtilStore} from './stores/UtilStore'

  const utilStore = useUtilStore()
</script>

<template>
  <router-view/>
  <v-snackbar
      v-model="utilStore.snackbar.show"
      :timeout="utilStore.snackbar.duration"
  >
    {{utilStore.snackbar.title}}
  </v-snackbar>
</template>

<style scoped lang="scss">
</style>
