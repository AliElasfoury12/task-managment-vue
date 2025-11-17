<script setup>
    const {form, errors} = defineProps({
        form: Object,
        errors: Object
    })    
</script>

<template>
    <div class="field">
        <label>Email</label>
        <input type="email" v-model="form.email" />
        <small v-if="errors.email">{{ errors.email }}</small>
    </div>
</template>