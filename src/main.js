import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { api } from './utils/APIMethods'
//import router from './router'

api.baseURL = "http://localhost:8000/api/"
createApp(App)./*use(router).*/mount('#app')
