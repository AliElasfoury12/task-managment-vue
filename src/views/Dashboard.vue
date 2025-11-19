<template>
    <div >
        <NavBar/>
        <main class="flex flex-col items-center mt-16">
            <CreateTask/>
            <ShowTasks/>
        </main>
    </div>
</template>

<script setup>
import CreateTask from '../components/CreateTask.vue';
import NavBar from '../components/NavBar.vue';
import ShowTasks from '../components/ShowTasks.vue';

</script>