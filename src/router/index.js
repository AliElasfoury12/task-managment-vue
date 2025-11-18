import {createRouter, createWebHistory} from 'vue-router'
import Register from '../components/auth/Register.vue'
import Login from '../components/auth/Login.vue'
import Dashboard from '../components/Dashboard.vue'

const routes = [
    {
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