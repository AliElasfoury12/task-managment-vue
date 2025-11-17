<script setup>
    const {form, errors} = defineProps({
        form: Object,
        errors: Object
    })    
</script>

<template>
    <div class="field">
        <label>Password</label>
        <input type="password" v-model="form.password" />
        <small v-if="errors.password">{{ errors.password }}</small>
    </div>
</template>