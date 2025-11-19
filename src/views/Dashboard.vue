<template>
        <NavBar/>
        <main class="flex flex-col items-center mt-16">
            <button 
                class="bg-blue-600 text-white w-full h-10"
                @click="toggleShowAddTask">
                add Task + 
            </button>
            <CreateTask v-if="showCreateTask" />
            <ShowTasks/>
        </main>
</template>

<script setup>
    import { ref } from 'vue';
    import CreateTask from '../components/CreateTask.vue';
    import NavBar from '../components/NavBar.vue';
    import ShowTasks from '../components/ShowTasks.vue';
    const showCreateTask = ref(false)

    const toggleShowAddTask = () => {
        showCreateTask.value = !showCreateTask.value
    }
</script>