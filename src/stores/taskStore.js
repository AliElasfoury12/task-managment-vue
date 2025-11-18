import { defineStore } from "pinia";
import { EndPoints } from "../data/EndPoints";
import { Patch, Get, Delete } from "../utils/APIMethods";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: [],
        isEditing: false,
        editingTaskId: 0,
        loading: false,
        pendingTasks: 0,
        totalTasks: 0,
        completedTasks: 0,
        errors: [],
        priority : ['low','medium', 'high']
    }),

    actions: {
        async fetchTasks() {
            this.loading = true;
            try {
                const data = await Get(EndPoints.getTasks) 
                this.tasks = data.tasks || []
                this.totalTasks = data.total_tasks_count
                this.pendingTasks = data.pending_tasks_count
                this.completedTasks = data.completed_tasks_count
            } catch (err) {
                this.errors.push("Failed to load tasks")
            } finally {
                this.loading = false
            }
        },

        addTask(task) {
            this.tasks.unshift(task)
        },

        setIsEditing(state) {
            this.isEditing = state
        },

        setEditingTaskId(id) {
            this.editingTaskId = id
        },

        async updateTask(editingTask) {
            if (!editingTask) return;

            try {
                await Patch(EndPoints.editTask(editingTask.id), editingTask);

                const index = this.tasks.findIndex(t => t.id === editingTask.id);
                if (index !== -1) this.tasks[index] = { ...editingTask };

                this.isEditing = false
                this.editingTaskId = null

            } catch (err) {
                console.error("Failed to update task", err);
            }
        },

        async deleteTask(id) {
            await Delete(EndPoints.deleteTask(id));
            this.tasks = this.tasks.filter(task => task.id !== id);
            alert('task deleted successfully')
            this.totalTasks--
        },

        async toggleComplete(task) {
            task.priority = this.priority[task.priority]
            await Patch(EndPoints.editTask(task.id), task)
            this.pendingTasks--
        },

    }
})