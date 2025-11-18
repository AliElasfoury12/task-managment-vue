<script setup>
    import { classes } from '../../../data/classes';
    const {form} = defineProps({
        form: Object,
        label: String
    })    
</script>

<template>
    <div>
        <label v-if="label" :class="classes.label">{{ label }}</label>
        <select v-model="form.priority" class=" p-2 w-full rounded">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        </select>
    </div>
</template>

