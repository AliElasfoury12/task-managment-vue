<template>
    <form @submit.prevent="submitForm" class="register-form">
        <h2>User Registration</h2>

        <EmailInput :form="form" :errors="errors" />

        <!-- PASSWORD -->
        <div class="field">
            <label>Password</label>
            <input type="password" v-model="form.password" />
            <small v-if="errors.password">{{ errors.password }}</small>
        </div>

        <button :disabled="loading">
            {{ loading ? "Registering..." : "Register" }}
        </button>
    </form>
</template>

<script setup>
import { ref } from "vue";
import EmailInput from "./EmailInput.vue";

// form data
const form = ref({
  name: "",
  email: "",
  password: ""
});

// validation errors
const errors = ref({});

// loading state
const loading = ref(false);

// emit success event
const emit = defineEmits(["registered"]);

// simple validation
const validate = () => {
  errors.value = {};

  if (!form.value.name) errors.value.name = "Name is required";
  if (!form.value.email) errors.value.email = "Email is required";
  if (!form.value.password || form.value.password.length < 6)
    errors.value.password = "Password must be at least 6 characters";

  return Object.keys(errors.value).length === 0;
};

// submit handler
const submitForm = async () => {
  if (!validate()) return;

  loading.value = true;

  try {
    // your API endpoint here
    const res = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form.value)
    });

    const data = await res.json();

    if (!res.ok) {
      errors.value = data.errors || { general: "Registration failed" };
      loading.value = false;
      return;
    }

    // emit success
    emit("registered", data);
  } catch (err) {
    errors.value.general = "Network error";
  }

  loading.value = false;
};
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