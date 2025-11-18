<script setup>
    import { onMounted } from "vue";
    import TaskCard from "./TaskCard.vue";
    import EditTask from "./EditTask.vue";
    import { useTaskStore } from '../stores/taskStore'
    import { storeToRefs } from 'pinia';

    const taskStore = useTaskStore()
    const { isEditing, editingTaskId, tasks, loading, errors } = storeToRefs(taskStore)  
    onMounted(() => {taskStore.fetchTasks()})
</script>

<template>
    <div class="list-none p-4">
        <h2 class="text-xl font-bold mb-4">My Tasks</h2>

        <div v-if="loading" class="text-gray-500">Loading tasks...</div>
        <div v-if="errors.length" class="text-red-500">{{ errors[0] }}</div>

        <ul v-if="tasks.length" class="w-96">
            <li
                v-for="task in tasks"
                :key="task.id"
                class="p-4 mb-2 border rounded shadow-sm flex justify-between items-center">
                    <EditTask v-if="isEditing && editingTaskId == task.id" :task="task"/>
                    <TaskCard v-else :task="task" />
            </li>
        </ul>

        <div v-if="!loading && tasks.length === 0" class="text-gray-500">
            No tasks found.
        </div>
    </div>
</template>