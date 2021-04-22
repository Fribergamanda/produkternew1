import Vue from 'vue'
import Vuex from 'vuex'
import produkter from './moduler/produkter'
import cart from './moduler/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    produkter,
    cart
  }
})