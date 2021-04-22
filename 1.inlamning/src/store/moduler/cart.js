export default {
  state: {
    cart: []
  },
  getters: {
    shoppingV: state => {
      return state.cart
    },
    cartItemCount: state => {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    }
  },
  mutations: {
    ADD_TO_CART: (state, { produkt, quantity }) => {
      let exists = state.cart.find(item => item.produkt.id === produkt.id)
      if(exists) {
        exists.quantity += quantity
        return
      }
      state.cart.push({produkt, quantity})
    }
  },
  actions: {
    addProduktToCart: ({commit}, { produkt, quantity }) => {
      commit('ADD_TO_CART', { produkt, quantity })
    }
  }
}