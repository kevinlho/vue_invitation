<script setup>
</script>

<template>
  <v-layout>
    <v-navigation-drawer
        expand-on-hover
        rail
    >
      <v-list>
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item @click="" prepend-icon="mdi-folder" title="My Files" value="myfiles"/>
        <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"/>
        <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"/>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<style scoped lang="scss">
</style>
