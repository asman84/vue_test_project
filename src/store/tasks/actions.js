
import {SET_TASKSLIST} from "@/store/tasks/mutations";
import axios from "axios";

export default {
    getTasks({commit}) {
        console.log('action 1')
        axios.get('https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=odil')
            .then(response =>{
                commit(SET_TASKSLIST, response.data)
            })
        console.log('action 2')
    }
}