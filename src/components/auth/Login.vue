<template>
    <form 
		@input="validateInput"
		@submit.prevent="submitForm" 
		class="register-form">
        <h2>Login</h2>

        <EmailInput :form="form" :errors="errors" />

       	<PasswordInput :form="form" :errors="errors"/>

        <button :disabled="loading">
            {{ loading ? "Login..." : "Login" }}
        </button>
    </form>
</template>

<script setup>
	import { ref } from "vue";
	import EmailInput from "./EmailInput.vue";
	import PasswordInput from "./PasswordInput.vue";
	import {Post} from '../../utils/APIMethods'
	import { EndPoints } from "../../data/EndPoints";
	import { formValdaitor } from "../../utils/FormValdation";
	import { emptyObject } from "../../utils/objects";

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

<style scoped>
.register-form {
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.field {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}
small {
  color: red;
}
button {
  padding: 10px;
  cursor: pointer;
}
</style>