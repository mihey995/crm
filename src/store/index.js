import Vue from 'vue'
import Vuex from 'vuex'
import { DEFAULT_MUTATION_MODAL } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: '',
    draftBtn: '', // hide
    leads: [
      {
        id: 1,
        idPartner: 0,
        name: 'Зоо', // краткое наименование организации партнёра
        address: ' адрес',
        podmenka: '85а',
        action: 'з', // з, о, з/о, к, др - забрать, отдать, купить, другое
        comments: 'коммент',
        curier: 101,
        manager: 101
      },
      {
        id: 1,
        idPartner: 0,
        name: 'Самсон',
        address: 'ввввв',
        podmenka: '',
        action: 'о',
        comments: 'ком',
        curier: 101,
        manager: 101
      },
      {
        id: 1,
        idPartner: 0,
        name: 'Лига',
        address: 'адрес лиги',
        podmenka: '4200',
        action: 'о/з',
        comments: '',
        curier: 102,
        manager: 101
      },
      {
        id: 1,
        idPartner: 0,
        name: 'Лига',
        address: 'адрес лиги',
        podmenka: '4200',
        action: 'о/з',
        comments: '',
        curier: 103,
        manager: 103
      }
    ]
  },
  getters: {
  },
  mutations: {
    [DEFAULT_MUTATION_MODAL] (state) {
      state.modal = {
        id: 0,
        idPartner: 0,
        name: '', // краткое наименование организации партнёра
        address: '',
        podmenka: '',
        action: 'з', // з, о, з/о, к, др - забрать, отдать, купить, другое
        comments: '',
        curier: 101, // id водителя-курьера
        manager: 101 // id ответственого менеджера
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
    },
    dbGetLogistic ({ commit, state }, obj) {
      obj.state.preloader = true
      setTimeout(function () {
        obj.state.preloader = false
      }, 3000)
    }
  },
  modules: {
  }
})
