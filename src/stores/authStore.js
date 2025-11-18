import { defineStore } from 'pinia'
import { EndPoints } from '../data/EndPoints'
import { Post, Get } from '../utils/APIMethods'
import { storage } from '../utils/storage'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token') || null,
        loading: false,
        errors: [],
    }),

    actions: {
        async login(email, password) {
            this.loading = true
            this.errors = []

            try {
                const data = await Post(EndPoints.login, form.value) 
                this.token = res.token 
                this.user = res.user
                storage.save('user', res.user)
                storage.save('token', res.token)
            } catch (err) {		
                this.errors = err.errors;		
            } finally {
                this.loading = false
            }
        },

        async logout() {
            this.loading = true

            try {
                await Get(EndPoints.logout)
                this.user = null
                this.token = null
                storage.delete('user')
                storage.delete('token')
            } catch (e) {
                console.warn('Backend logout skipped')
            } finally{
                this.loading = false
            }
        }
    }
})