<template>
    <Input
        :errors="errors" 
        :form="form" 
        type="date"
        label="Due Date" 
        name="due_date" 
    />
</template>

<script setup>
    import Input from '../Input.vue'
    const {form, errors} = defineProps({
        form: Object,
        errors: Object
    })    
</script>