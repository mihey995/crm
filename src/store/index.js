import Vue from 'vue'
import Vuex from 'vuex'
import { DEFAULT_MUTATION_MODAL } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: '',
    draftBtn: '', // hide
    leads: {
      id: 1,
      name: ''
    }
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
      this.commit('showDraftBtn', 'show')
    },
    editIdPoisk (state, payLoad) {
      state.modal = Object.assign(state.modal, payLoad)
      this.commit('showDraftBtn', 'show')
    },
    showDraftBtn (state, show) {
      state.draftBtn = show
    }
  },
  actions: {
    dbSetLogistic () {
      // скрываем кнопку черновик
      this.commit('showDraftBtn', '')
      // отправлояем в базу новую заявку
    }
  },
  modules: {
  }
})
