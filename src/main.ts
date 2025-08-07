import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { EmailService } from './services/emailService'

// Inicializar EmailJS
EmailService.init()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
