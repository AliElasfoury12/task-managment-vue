<template>
    <Input
        :errors="errors" 
        :form="form" 
        type="password"
        label="Password" 
        name="password" 
        placeholder="Enter Your Password"  
    />
</template>

<script setup>
    import Input from '../Input.vue'
    const {form, errors} = defineProps({
        form: Object,
        errors: Object
    })    
</script>