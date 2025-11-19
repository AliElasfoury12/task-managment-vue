<script setup>
    import { onMounted, ref } from "vue";
    import TaskCard from "./TaskCard.vue";
    import EditTask from "./EditTask.vue";
    import { useTaskStore } from '../stores/taskStore'
    import { storeToRefs } from 'pinia';

    const taskStore = useTaskStore()
    const { isEditing, editingTaskId, tasks, loading, errors } = storeToRefs(taskStore)  
    const filteredTasks = ref([])
    const highLigtedClass = 'bg-yellow-400 w-28'

    const filter = ref('total')
    const filterPendingTasks = () => {
        filter.value = 'pending'
        filteredTasks.value = tasks.value.filter((task) => task.completed === 0 )
    }

    const filterCompletedTasks = () => {
        filter.value = 'completed'
        filteredTasks.value = tasks.value.filter((task) => task.completed === 1)
    }

    const filterTotalTasks = () => {
        if(filteredTasks.value == tasks.value) return
        filter.value = 'total'
        filteredTasks.value = [...tasks.value]
    }

    onMounted(async () => {
        taskStore.fetchTasks()
        .then(() => filterTotalTasks())
    })
</script>

<template>
    <div class="list-none p-4">
        <div class="flex w-full justify-between ">
            <button :class="filter == 'total' ?highLigtedClass : 'w-28'" @click="filterTotalTasks">Total</button>
            <button :class="filter == 'pending' ?highLigtedClass : 'w-28' " @click="filterPendingTasks" >Pending</button>
            <button :class="filter == 'completed' ?highLigtedClass : 'w-28' " @click="filterCompletedTasks">Completed</button>
        </div>

        <h2 class="text-xl font-bold mb-4">My Tasks</h2>

        <div v-if="loading" class="text-gray-500">Loading tasks...</div>
        <div v-if="errors.length" class="text-red-500">{{ errors[0] }}</div>

        <ul v-if="tasks.length" class="w-96">
            <li
                v-for="task in filteredTasks"
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