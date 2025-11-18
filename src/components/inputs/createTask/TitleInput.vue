<script setup>
    import Input from '../Input.vue'
    const {form} = defineProps({
        form: Object,
        label: String
    })    
</script>

<template>
    <Input
        :form="form" 
        :label="label ? label : null" 
        name="title" 
        placeholder="Enter Task Title"  
    />
</template>
