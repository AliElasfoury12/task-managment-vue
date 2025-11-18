<template>
    <form 
        @submit.prevent="submitTask" 
        :class="classes.form">

        <TitleInput :form="form" label="Title" :errors="errors" />
   
        <DescriptionTextArea :form="form" label="Description" :errors="errors" />

        <PrioritySelect :form="form" label="Priority" :errors="errors"/>
    
        <DueDateInput :form="form" label="DueDate" :errors="errors" />

        <button :class="classes.submitButton">
            Create Task
        </button>

    </form>
</template>

<script setup>
    import { ref } from 'vue'
    import TitleInput from './inputs/createTask/TitleInput.vue'
    import { classes } from '../data/classes'
    import DescriptionTextArea from './inputs/createTask/DescriptionTextArea.vue'
    import PrioritySelect from './inputs/createTask/PrioritySelect.vue'
    import DueDateInput from './inputs/createTask/DueDateInput.vue'
    import { Post } from '../utils/APIMethods'
    import { EndPoints } from '../data/EndPoints'
    import { formValdaitor } from '../utils/FormValdation'
    import { emptyObject } from '../utils/objects'

    const task = {
        title: '',
        description: '',
        priority: 'low',
        due_date: ''
    }

    const form = ref(task)
    const errors = ref({})

    const rules = {
        title: 'required|max:150',
        description: 'max:400',
        priority: 'required',
        due_date: /*'date'*/"",
    }

    async function submitTask() {
        errors.value = formValdaitor.formValdaite(form.value, rules)                        
        if(!emptyObject(errors.value)) return

        try {
            await Post(EndPoints.createTask, form.value)
            form.value = task
        } catch (err) {
            errors.value = err
        }
    }
</script>