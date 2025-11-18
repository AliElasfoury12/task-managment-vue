<script setup>
    import { classes } from '../../../data/classes';
    const {form} = defineProps({
        form: Object,
        label: String
    })    
</script>

<template>
    <div>
        <label v-if="label" :class="classes.label">{{label}}</label>
        <textarea
        v-model="form.description"
        class="border p-2 w-full rounded resize-none h-20"
        placeholder="Enter description"
        ></textarea>
    </div>
</template>

