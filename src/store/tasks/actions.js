import {SET_TASKSLIST, SET_LOADING, SET_TASKS_TOTAL_NUMBER} from "@/store/tasks/mutations";
import axios from "axios";

export default {
    getTasks({commit, state}, payload) {
        commit(SET_LOADING, true)
        const url = 'https://uxcandy.com/~shapoval/test-task-backend/v2/'
        const data = {
            params: {
                developer: 'odil',
                page: payload
            }
        }
        axios.get(url, data)
            .then(response => {
                commit(SET_TASKSLIST, response.data)
                commit(SET_LOADING, false)
                commit(SET_TASKS_TOTAL_NUMBER, response.data.message.total_task_count)
            }).catch(err => {
            console.log('error ')
        })
    },
    createTask({dispatch},payload){

        var form = new FormData();
        for (var key in payload){
            form.append(key,payload[key])
        }

        const url = 'https://uxcandy.com/~shapoval/test-task-backend/v2/create'
        const params = {
            developer:'odil'
        }
        axios.post(url, form, {headers: {"Content-Type": "multipart/form-data"},params:params})
            .then(response => {
                dispatch('getTasks',1)

            }).catch(err => {
            console.log('error ')
        })
    }
}