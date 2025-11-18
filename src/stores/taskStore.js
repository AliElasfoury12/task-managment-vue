import { defineStore } from "pinia";
import { EndPoints } from "../data/EndPoints";
import { Patch, Get } from "../utils/APIMethods";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: [],
        isEditing: false,
        editingTaskId: 0,
        loading: false,
        errors: [],
        editingTask: null, // <-- holds the task currently being edited
    }),

    actions: {
        async fetchTasks() {
            this.loading = true;
            try {
                const data = await Get(EndPoints.getTasks) || []
                this.tasks = data.tasks
            } catch (err) {
                this.errors.push("Failed to load tasks")
            } finally {
                this.loading = false
            }
        },

        startEditing(task) {
            this.editingTask = { ...task }; // make copy for safe editing
        },

        cancelEditing() {
            this.editingTask = null;
        },

        setIsEditing(state) {
            this.isEditing = state
        },

        setEditingTaskId(id) {
            this.editingTaskId = id
        },

        async saveEditing() {
            if (!this.editingTask) return;

            const data = this.editingTask;

            await Patch(EndPoints.editTask(data.id), data);

            // update the local tasks array
            const index = this.tasks.findIndex(t => t.id === data.id);
            if (index !== -1) {
                this.tasks[index] = { ...data };
            }

            this.editingTask = null;
        },

        async toggleComplete(task) {
            await Patch(EndPoints.editTask(task.id), {
                completed: task.completed,
            });
        }
    }
})