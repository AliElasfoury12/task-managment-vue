<template>
    <form 
        @submit.prevent="submitTask" 
        :class="classes.form">

        <TitleInput :form="task" :errors="errors??{}" />
   
        <DescriptionTextArea :form="task" :errors="errors??{}" />

        <PrioritySelect :form="task" :errors="errors??{}"/>
    
        <DueDateInput :form="task" :errors="errors??{}" />

        <button :class="classes.submitButton">
            Create Task
        </button>

    </form>
</template>

<script setup>
    import { reactive } from 'vue'
    import TitleInput from './inputs/createTask/TitleInput.vue'
    import { classes } from '../data/classes'
    import DescriptionTextArea from './inputs/createTask/DescriptionTextArea.vue'
    import PrioritySelect from './inputs/createTask/PrioritySelect.vue'
    import DueDateInput from './inputs/createTask/DueDateInput.vue'

    const task = reactive({
        title: '',
        description: '',
        priority: 'low',
        due_date: ''
    })

    // Emit event
    const emit = defineEmits(['create-task'])

    function submitTask() {
        emit('create-task', { ...task })

        // Clear form
        task.title = ''
        task.description = ''
        task.priority = 'low'
        task.due_date = ''
    }
</script>