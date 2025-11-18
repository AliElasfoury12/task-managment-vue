export const EndPoints = {
    login: 'login',
    logout: 'logout',
    register: 'register',
    createTask: 'tasks',
    getTasks: 'tasks',
    editTask: (taskId) => `tasks/${taskId}`,
    deleteTask: (taskId) => `tasks/${taskId}`
}