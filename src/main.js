import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { api } from './utils/APIMethods'
import router from './router'
import './assets/main.css'

api.baseURL = "http://localhost:8000/api/"
api.token = "1|2draKF4gROAk8XUoDcMgBYwD1zV1VOfREoWD9jUY7f59956c"

const app = createApp(App)
app.use(router)
app.mount('#app')
