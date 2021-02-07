import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css'
import '@/main.css'
import '@/assets/js/material.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')