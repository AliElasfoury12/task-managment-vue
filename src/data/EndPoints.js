export const EndPoints = {
    login: 'login',
    register: 'register',
    createTask: 'tasks',
    getTasks: 'tasks',
    editTask: (taskId) => `tasks/${taskId}`
}