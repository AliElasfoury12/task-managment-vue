<script setup>
    import Input from '../Input.vue'
    const {form} = defineProps({
        form: Object,
        errors: Object
    })    
</script>

<template>
    <Input
        :errors="errors" 
        :form="form" 
        type="date"
        label="Due Date" 
        name="due_date" 
    />
</template>