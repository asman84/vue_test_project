import Vue from 'vue'
import Vuex from 'vuex'
import taskStore from './tasks'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    taskStore
  }
})
