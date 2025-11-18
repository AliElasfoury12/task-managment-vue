<script setup>
import { classes } from '../../data/classes';

    const {form, errors} = defineProps({
        form: Object,
        errors: {
            type: Object,
            default: {}
        },
        name: String,
        type: String,
        label: String,
        placeholder: String
    })    
</script>

<template>
    <div class="flex flex-col items-start gap-1" >
        <label :class="classes.label" v-if="label" >
            {{label}}
        </label>
        <input 
            class="p-2 w-full rounded"
            :type="type ? type: 'text'"
            v-model="form[name]" 
            :name="name" 
            :placeholder="placeholder ? placeholder : label " />
        <p class="text-red-600" v-if="errors[name]">
            {{ errors[name][0] }}
        </p>
    </div>
</template>