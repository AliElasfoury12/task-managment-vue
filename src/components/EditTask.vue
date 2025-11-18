<script setup>
    import { ref } from 'vue';
    import TitleInput from '../components/inputs/createTask/TitleInput.vue'
    import DescriptionTextArea from './inputs/createTask/DescriptionTextArea.vue';
    import PrioritySelect from './inputs/createTask/PrioritySelect.vue';
    import DueDateInput from './inputs/createTask/DueDateInput.vue';
    import { useTaskStore } from '../stores/taskStore'
    import { storeToRefs } from 'pinia';

    const taskStore = useTaskStore()
    const { isEditing } = storeToRefs(taskStore)

    const {task} = defineProps({
        task: Object,
        editing: Boolean
    })

    const editedTask = ref({ ...task });

    // Cancel editing
    const cancelEdit = () => {
        editing.value = false;
    };

    // Save edited task
    const saveEdit = async () => {
        try {
            const response = await Patch(EndPoints.editTask(task.id), editedTask.value);

            // Update UI instantly
            task.title = editedTask.value.title;
            task.description = editedTask.value.description;
            task.priority = editedTask.value.priority;
            task.due_date = editedTask.value.due_date;

            editing.value = false;
        } catch (err) {
            console.error("Failed to update task", err);
        }
    };
</script>

<template>

     <!-- Editing mode -->
    <form class="w-full">
        <TitleInput :form="editedTask" :errors="{}" />
        <DescriptionTextArea :form="editedTask" :errors="{}"/>
        <PrioritySelect :form="editedTask" :errors="{}" />
        <DueDateInput :form="editedTask" :errors="{}" />

        <!-- Buttons -->
        <div class="flex gap-2">
            <button
                @click="saveEdit"
                class="px-2 py-1 bg-green-600 text-white rounded">
                Save
            </button>

            <button
                @click="taskStore.setIsEditing(false)"
                class="px-2 py-1 bg-gray-400 text-white rounded">
                Cancel
            </button>
        </div>
    </form>
</template>