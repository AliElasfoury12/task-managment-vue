<script setup>
    import Input from '../Input.vue'
    const {form} = defineProps({
        form: Object,
        errors: Object,
        label: String
    })    
</script>

<template>
    <Input
        :errors="errors" 
        :form="form" 
        type="date"
        :label="label ? 'Due Date' : null" 
        name="due_date" 
    />
</template>