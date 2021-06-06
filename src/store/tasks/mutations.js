export const SET_TASKSLIST = 'setTasksList'

export default {
    [SET_TASKSLIST](state,tasksList){
        state.tasksList = tasksList.message.tasks
    }
}