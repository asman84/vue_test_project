import {SET_TASKSLIST,SET_LOADING} from "@/store/tasks/mutations";
import axios from "axios";

export default {
    getTasks({commit,state}) {
        console.log('action 1')
        // state.loading = true
        commit(SET_LOADING, true)
        axios.get('https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=odil')
            .then(response => {
                commit(SET_TASKSLIST, response.data)
                commit(SET_LOADING, false)
                // state.loading = true
            })
        console.log('action 2')
    }
}