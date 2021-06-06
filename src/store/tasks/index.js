import mutations from './mutations'
import actions from './actions'
import getters from './getters'


export default {
    namespaced:true,
    statetaskStore: {
        tasksList:[]
    },
    mutations,
    actions,
    getters
}