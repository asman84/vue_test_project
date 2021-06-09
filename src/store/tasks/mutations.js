export const SET_TASKSLIST = 'setTasksList'
export const SET_LOADING = 'setLoading'
export const SET_TASKS_TOTAL_NUMBER = 'setTaskTotalNumber'

export default {
    [SET_TASKSLIST](state, tasksList) {
        state.tasksList = tasksList.message.tasks
    },
    [SET_LOADING](state, payload) {
        state.loading = payload
    },
    [SET_TASKS_TOTAL_NUMBER](state, payload) {
        state.totalTasks = parseInt(payload)
    }
}
