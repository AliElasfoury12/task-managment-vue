<template>
    <form 
		@input="validateInput"
		@submit.prevent="submitForm" 
		:class="classes.form">
        <h1 class="text-3xl">Login</h1>

        <EmailInput :form="form" :errors="errors" />

       	<PasswordInput :form="form" :errors="errors"/>

        <button :disabled="loading" :class="classes.submitButton">
            {{ loading ? "Login..." : "Login" }}
        </button>
    </form>
</template>

<script setup>
	import { ref } from "vue";
	import EmailInput from "../inputs/auth/EmailInput.vue";
	import PasswordInput from "../inputs/auth/PasswordInput.vue";
	import {Post} from '../../utils/APIMethods'
	import { EndPoints } from "../../data/EndPoints";
	import { formValdaitor } from "../../utils/FormValdation";
	import { emptyObject } from "../../utils/objects";
	import { classes } from "../../data/classes";

	const form = ref({
	email: "",
	password: ""
	});

	const errors = ref({});
	const loading = ref(false);

	const rules = {
		email: 'required|min:4|email|max:100',
		password: 'required|min:4|max:100',
	}

	const validateInput = (event) => {	
		const {name} = event.target
		errors.value = formValdaitor.inputValdaite(rules, form.value, name) 
	}

	const submitForm = async () => {
		errors.value = formValdaitor.formValdaite(form.value, rules)  
		console.log(errors.value);
		
		if(!emptyObject(errors.value)) return
	
		loading.value = true;

		try {
			const data = await Post(EndPoints.login, form.value)   
		} catch (err) {		
			errors.value = err.errors;		
			loading.value = false;
		}

		loading.value = false;
	}
</script>