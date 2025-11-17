<template>
    <Input
        :errors="errors" 
        :form="form" 
        type="email"
        label="Email" 
        name="email" 
        placeholder="Enter Your Email"  
    />
</template>

<script setup>
    import Input from '../Input.vue'
    const {form, errors} = defineProps({
        form: Object,
        errors: Object
    })    
</script>