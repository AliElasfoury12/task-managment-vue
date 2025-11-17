<template>
    <Input
        :errors="errors" 
        :form="form" 
        label="Password Confirmation" 
        name="password_confirmation" 
        placeholder="Confirm Your Password"  
    />
</template>

<script setup>
    import Input from './Input.vue'
    const {form, errors} = defineProps({
        form: Object,
        errors: Object
    })    
</script>