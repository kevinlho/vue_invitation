import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Vuetify
import vuetify from "./plugins/vuetify";

import './assets/main.css'

import Router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(Router)

app.mount('#app')
