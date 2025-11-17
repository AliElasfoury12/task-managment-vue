<template>
    <form 
		@input="validateInput"
		@submit.prevent="submitForm" 
		:class="classes.form">
        <h1 class="text-3xl" >Register</h1>

      	<NameInput :form="form" :errors="errors"/>

        <EmailInput :form="form" :errors="errors" />

       	<PasswordInput :form="form" :errors="errors"/>

        <PasswordConfirm :form="form" :errors="errors"/>

        <button :disabled="loading" :class="classes.submitButton" >
            {{ loading ? "Registering..." : "Register" }}
        </button>
    </form>
</template>

<script setup>
	import { ref } from "vue";
	import NameInput from "../inputs/auth/NameInput.vue";
	import EmailInput from "../inputs/auth/EmailInput.vue";
	import PasswordInput from "../inputs/auth/PasswordInput.vue";
	import PasswordConfirm from "../inputs/auth/PasswordConfirm.vue";
	import {Post} from '../../utils/APIMethods'
	import { EndPoints } from "../../data/EndPoints";
	import { formValdaitor } from "../../utils/FormValdation";
	import { emptyObject } from "../../utils/objects";
	import { classes } from "../../data/classes";
	import {useRouter} from "vue-router"

	const router = useRouter()
	const errors = ref({});
	const loading = ref(false);

	const form = ref({
		name: "",
		email: "",
		password: "",
		password_confirmation:""
	});

	const rules = {
		name: 'required|min:4|max:100',
		email: 'required|min:4|email|max:100',
		password: 'required|min:4|max:100',
		password_confirmation: 'required|min:4|match:password|max:100'
	}

	const validateInput = (event) => {			
		const {name} = event.target
		errors.value = formValdaitor.inputValdaite(rules, form.value, name) 
	}

	const submitForm = async () => {
		errors.value = formValdaitor.formValdaite(form.value, rules)  		
		if(!emptyObject(errors.value)) return
	
		loading.value = true;

		try {
			await Post(EndPoints.register, form.value)   
			router.push('/login')
		} catch (err) {		
			errors.value = err.errors;		
			loading.value = false;
		}

		loading.value = false;
	}
</script>