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
    ADD_TO_CART: (state, { Product, quantity }) => {
      let exists = state.cart.find(item => item.Product.id === Product.id)
      if(exists) {
        exists.quantity += quantity
        return
      }
      state.cart.push({Product, quantity})
    }
  },
  actions: {
    addProductToCart: ({commit}, { Product, quantity }) => {
      commit('ADD_TO_CART', { Product, quantity })
    }
  }
}