import {createRouter, createWebHistory} from 'vue-router'
import Register from '../components/auth/Register.vue'
import Login from '../components/auth/Login.vue'
import CreateTask from '../components/CreateTask.vue'
import Dashboard from '../components/Dashboard.vue'
import EditTask from '../components/EditTask.vue'



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
    },{
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },{
        path: '/editTask',
        name: 'editTask',
        component: EditTask
    },
    
]

const router = createRouter ({
  history: createWebHistory(),
  routes
})

export default router