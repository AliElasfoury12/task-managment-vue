<script setup>
    const emit = defineEmits(["confirm", "cancel"])
</script>

<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center">
    <div class="bg-white p-5 rounded-xl shadow-lg w-72">
      <h2 class="text-lg font-bold mb-3">Confirm Delete</h2>
      <p class="text-gray-600 mb-5">Are you sure you want to delete this task?</p>

      <div class="flex justify-between">
        <button 
          class="px-4 py-2 rounded bg-gray-300"
          @click="emit('cancel')">
          Cancel
        </button>

        <button 
          class="px-4 py-2 rounded bg-red-600 text-white"
          @click="emit('confirm')">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>