import mutations from './mutations'
import actions from './actions'
import getters from './getters'


export default {
    namespaced:true,
    state: {
        tasksList:[],
        loading:false,
        totalTasks:0,
    },
    mutations,
    actions,
    getters
}