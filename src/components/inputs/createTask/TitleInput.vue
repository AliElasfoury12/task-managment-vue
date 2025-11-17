<script setup>
    import Input from '../Input.vue'
    const {form} = defineProps({
        form: Object,
    })    
</script>

<template>
    <Input
        :form="form" 
        label="Title" 
        name="title" 
        placeholder="Enter Task Title"  
    />
</template>
