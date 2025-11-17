<script setup>
    import { classes } from '../../../data/classes';
    const {form, errors} = defineProps({
        form: Object,
        errors: Object
    })    
</script>

<template>
    <div>
        <label :class="classes.label">Description</label>
        <textarea
        v-model="form.description"
        class="border p-2 w-full rounded resize-none h-20"
        placeholder="Enter description"
        ></textarea>
    </div>
</template>

