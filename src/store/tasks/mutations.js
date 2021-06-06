export const SET_TASKSLIST = 'setTasksList'
export const SET_LOADING = 'setLoading'

export default {
    [SET_TASKSLIST](state,tasksList){
        console.log('mutation 1')
        state.tasksList = tasksList.message.tasks
        console.log('mutation 2',state.tasksList)

    },
    [SET_LOADING](state,payload){
        state.loading = payload
    }
}