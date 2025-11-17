<template>
    <Input
        :errors="errors" 
        :form="form" 
        label="Title" 
        name="title" 
        placeholder="Enter Task Title"  
    />
</template>

<script setup>
    import Input from '../Input.vue'
    const {form, errors} = defineProps({
        form: Object,
        errors: Object
    })    
</script>