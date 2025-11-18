<template>
    <nav class="w-screen bg-blue-600 text-white h-10 fixed top-0 left-0">
        <ul class="flex justify-between px-10 items-center h-full ">
            <li><router-link to="/dashboard">Dashboard</router-link></li>
            <li>toatl: {{ totalTasks }}</li>
            <li>pending: {{ pendingTasks }}</li>
            <li>completed: {{ completedTasks }}</li>

            <li v-if="auth.token" class="bg-red-600 rounded-sm p-1">
                <button @click="handleLogout">Logout</button>
            </li>
        </ul>
    </nav>
</template>

<script setup>
    import { useAuthStore } from '../stores/authStore'
    import { useTaskStore } from '../stores/taskStore'
    import { useRouter } from 'vue-router'
    import { storeToRefs } from 'pinia';
    
    const taskStore = useTaskStore()
    const {pendingTasks, totalTasks, completedTasks} = storeToRefs(taskStore)    

    const auth = useAuthStore()
    const router = useRouter()

    const handleLogout = async () => {
        const ok = await auth.logout()

        if (ok) router.push('/login')
    }

</script>