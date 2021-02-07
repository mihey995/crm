import Vue from 'vue'
import Vuex from 'vuex'
import { DEFAULT_MUTATION_MODAL } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: '',
  },
  getters: {
  },
  mutations: {
    [DEFAULT_MUTATION_MODAL] (state) {
      state.modal = {
        name: '',
        idPoisk: '',
        url: '',
        timeStart: '08:00',
        timeEnd: '21:00',
        interval: 10 // in minutes
      }
    },
    editIdPoisk (state, payLoad) {
      state.modal = Object.assign(state.modal, payLoad)
    }
  },
  actions: {
  },
  modules: {
  }
})
