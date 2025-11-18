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
import CreateTask from './CreateTask.vue';
import NavBar from './NavBar.vue';
import ShowTasks from './ShowTasks.vue';

</script>