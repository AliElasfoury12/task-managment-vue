<template>
    <form 
        @submit.prevent="submitTask" 
        :class="classes.form">

        <TitleInput :form="form" :errors="errors" />
   
        <DescriptionTextArea :form="form" :errors="errors" />

        <PrioritySelect :form="form" :errors="errors"/>
    
        <DueDateInput :form="form" :errors="errors" />

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
        title: 'required|max:100',
        description: 'max:200',
        priority: 'required',
        // due_date: 'date',
        due_date:''
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