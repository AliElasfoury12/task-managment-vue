import {createRouter, createWebHistory} from 'vue-router'
import Register from '../components/auth/Register.vue'
import Login from '../components/auth/Login.vue'
import CreateTask from '../components/CreateTask.vue'



const routes = [
    {
        path: '/register',
        name: 'register',
        component: Register
    },{
        path: '/login',
        name: 'login',
        component: Login
    },{
        path: '/createTask',
        name: 'createTask',
        component: CreateTask
    },
    
]

const router = createRouter ({
  history: createWebHistory(),
  routes
})

export default router