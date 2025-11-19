import {createRouter, createWebHistory} from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
    {
        path: '/',
        redirect : '/dashboard'
    },{
        path: '/register',
        component: Register
    },{
        path: '/login',
        component: Login
    },{
        path: '/dashboard',
        component: Dashboard,
        meta: {requiresAuth: true}
    }
]

const router = createRouter ({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next) => {
    const isAuthanticated = localStorage.getItem('token')
    if(to.meta.requiresAuth && !isAuthanticated)
        next('/login')
    else next()
})

export default router