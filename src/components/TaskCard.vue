<script setup>
    import { EndPoints } from '../data/EndPoints';
    import {Patch} from '../utils/APIMethods'
    import { useTaskStore } from '../stores/taskStore'

    const taskStore = useTaskStore()

    const {task} = defineProps({
        task: Object
    })

    const priority = ['low','medium', 'high']

    const toggleComplete = async (task) => {
        try {
            await Patch(EndPoints.editTask(task.id), { completed: task.completed })
        } catch (err) {
            console.error("Failed to update task", err);
        }
    }
    const priorityClass = () => {
        switch (priority[task.priority]) {
            case 'high':
            return "text-red-600 font-bold";
            case 'medium':
            return "text-yellow-600 font-semibold";
            default:
            return "text-green-600";
        }
    }

    const startEdit = () => {        
       taskStore.setIsEditing(true)
       taskStore.setEditingTaskId(task.id)
    }

    const deleteTask = () => {

    }
</script>

<template >
    <div>
        <h3 class="font-semibold w-fit">{{ task.title }}</h3>
        <p class="text-gray-600 w-fit">{{ task.description }}</p>
        <p class="text-sm text-gray-400 w-fit">
            <span :class="priorityClass(task.priority)">{{ priority[task.priority] }}</span>
        </p>
        <p class="text-sm text-gray-400 w-fit">Due: {{task.due_date}}</p>
    </div>

    <div class="self-start h-fit flex gap-2" >
        <button 
            @click="startEdit"
            class="px-2 py-1 text-sm bg-blue-500 text-white rounded">
            Edit
        </button>
        <button 
            @click="deleteTask"
            class="px-2 py-1 text-sm bg-red-600 text-white rounded">
            Delete
        </button>
    </div>

    <div>
        <input type="checkbox" v-model="task.completed" @change="toggleComplete(task)" />
    </div>
</template>

