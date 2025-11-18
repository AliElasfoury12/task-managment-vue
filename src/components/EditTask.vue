<script setup>
    import { ref } from 'vue';
    import TitleInput from '../components/inputs/createTask/TitleInput.vue'
    import DescriptionTextArea from './inputs/createTask/DescriptionTextArea.vue';
    import PrioritySelect from './inputs/createTask/PrioritySelect.vue';
    import DueDateInput from './inputs/createTask/DueDateInput.vue';
    import { useTaskStore } from '../stores/taskStore'
    import { classes } from '../data/classes';

    const taskStore = useTaskStore()

    const {task} = defineProps({
        task: Object,
        editing: Boolean
    })

    const priority = ['low','medium', 'high']

    const editedTask = ref({ ...task });
    editedTask.value.priority = priority[editedTask.value.priority]
    const updateTask = () => taskStore.updateTask(editedTask.value)
</script>

<template>
    <form 
        @submit.prevent="updateTask"
        :class="classes.form">

        <TitleInput :form="editedTask" :errors="{}" />
        <DescriptionTextArea :form="editedTask" :errors="{}"/>
        <PrioritySelect :form="editedTask" :errors="{}" />
        <DueDateInput :form="editedTask" :errors="{}" />

        <div class="flex gap-2">
            <button
                type="submit"
                class="px-2 py-1 bg-green-600 text-white rounded">
                Save
            </button>

            <button
                type="button"
                @click="taskStore.setIsEditing(false)"
                class="px-2 py-1 bg-gray-400 text-white rounded">
                Cancel
            </button>
        </div>
    </form>
</template>