<script setup>
  import {ref, onMounted, watchEffect} from "vue";
  import { useRoute } from 'vue-router';

  import {useUtilStore} from './stores/UtilStore'

  const route = useRoute()
  const utilStore = useUtilStore()

  const state = ref({
    isDrawerEnable : true,
    drawer : false,
    links: [
      {
        type: 'item',
        icon   : 'mdi-view-dashboard',
        text   : 'Dashboard',
        value : 'dashboard',
        to     : '/dashboard'
      },
      {
        type: 'header',
        text   : 'Inventory',
      },
      {
        type: 'item',
        icon   : 'mdi-view-dashboard',
        text   : 'Inventory Add',
        value : 'inventory_add',
        to     : '/inventory/add'
      },
    ],
  })

  watchEffect(()=>{
    checkDrawerToggle(route.name)
  })

  //used to check if route
  function checkDrawerToggle(currentRoute){
    let disableRoute = [
        // "Login"
    ]
    state.value.isDrawerEnable = !disableRoute.includes(currentRoute)
  }
</script>

<template>
    <v-layout class="pa-0 ma-0">
      <v-app-bar
          v-if="state.isDrawerEnable"
          color="primary"
          prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="state.drawer = !state.drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>CMS KOE</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        <v-btn variant="text" icon="mdi-filter"></v-btn>
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
          v-model="state.drawer"
          location="left"
          temporary
      >
        <v-list>
          <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Kevin Susanto"
              subtitle="Admin"
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list nav v-for="(link, i) in state.links">
          <v-list-subheader v-if="link.type === 'header'">{{link.text}}</v-list-subheader>
          <v-list-item v-if="link.type === 'item'" :prepend-icon="link.icon" :title="link.text" :value="link.value" :active="false"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="root-container">
        <router-view/>
      </v-main>
    </v-layout>
  <v-snackbar
      v-model="utilStore.snackbar.show"
      :timeout="utilStore.snackbar.duration"
  >
    {{utilStore.snackbar.title}}
  </v-snackbar>
</template>

<style scoped lang="scss">
  .root-container{
    width: 100vw;
    height: 100vh;
  }
</style>
