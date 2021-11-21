import Vue from 'vue'
import Vuex from 'vuex'
import Products from './moduler/Products'
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
    Products,
    cart
  }
})