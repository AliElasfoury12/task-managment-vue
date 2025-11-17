<template>
    <Input
        :errors="errors" 
        :form="form" 
        label="Name" 
        name="name" 
        placeholder="Enter Your Name"  
    />
</template>

<script setup>
    import Input from './Input.vue'
    const {form, errors} = defineProps({
        form: Object,
        errors: Object
    })    
</script>