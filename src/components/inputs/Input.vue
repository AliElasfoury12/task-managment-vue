<script setup>
    const {form, errors} = defineProps({
        form: Object,
        errors: Object,
        name: String,
        type: String,
        label: String,
        placeholder: String
    })    
</script>

<template>
    <div class="field">
        <label>{{label}}</label>
        <input 
            :type="type ? type: 'text'"
            v-model="form[name]" 
            :name="name" 
            :placeholder="placeholder ? placeholder : label " />
        <small v-if="errors[name]">{{ errors[name][0] }}</small>
    </div>
</template>