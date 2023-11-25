import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { pinia } from '@library/stores'

const app = createApp(App)

app.use(pinia)
app.use(createPinia())

app.mount('#app')
