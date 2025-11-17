<template>
  <form @submit.prevent="submitTask" class="space-y-4 p-4 border rounded-lg">

    <!-- Title -->
    <div>
      <label class="block font-semibold mb-1">Title</label>
      <input 
        v-model="task.title"
        type="text"
        class="border p-2 w-full rounded"
        placeholder="Enter task title"
      />
    </div>

    <!-- Description -->
    <div>
      <label class="block font-semibold mb-1">Description</label>
      <textarea
        v-model="task.description"
        class="border p-2 w-full rounded"
        placeholder="Enter description"
      ></textarea>
    </div>

    <!-- Priority -->
    <div>
      <label class="block font-semibold mb-1">Priority</label>
      <select v-model="task.priority" class="border p-2 w-full rounded">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>

    <!-- Due Date -->
    <div>
      <label class="block font-semibold mb-1">Due Date</label>
      <input 
        v-model="task.due_date"
        type="date"
        class="border p-2 w-full rounded"
      />
    </div>

    <!-- Submit Button -->
    <button 
      type="submit"
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Create Task
    </button>

  </form>
</template>

<script setup>
import { reactive } from 'vue'

// Task object
const task = reactive({
  title: '',
  description: '',
  priority: 'low',
  due_date: ''
})

// Emit event
const emit = defineEmits(['create-task'])

function submitTask() {
  emit('create-task', { ...task })

  // Clear form
  task.title = ''
  task.description = ''
  task.priority = 'low'
  task.due_date = ''
}
</script>

<style scoped>
</style>