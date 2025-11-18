import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { api } from './utils/APIMethods'
import router from './router'
import './assets/main.css'
import {createPinia} from 'pinia'

api.baseURL = "http://localhost:8000/api/"
api.token = "1|2draKF4gROAk8XUoDcMgBYwD1zV1VOfREoWD9jUY7f59956c"

createApp(App).use(router).use(createPinia()).mount('#app')
