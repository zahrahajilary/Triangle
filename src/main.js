import Vue from 'vue'
import App from './App.vue'
import router from './routes/routes'
import Vuex from 'vuex'
import store from './store'
Vue.use(Vuex)
// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
