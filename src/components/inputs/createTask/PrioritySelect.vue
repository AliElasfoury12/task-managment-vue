<script setup>
    import { classes } from '../../../data/classes';
    const {form, errors} = defineProps({
        form: Object,
        errors: Object
    })    
</script>

<template>
    <div>
        <label :class="classes.label">Priority</label>
        <select v-model="form.priority" class="border p-2 w-full rounded">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        </select>
    </div>
</template>

