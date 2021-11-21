import axios from 'axios'

export default {
  state: {
    Products: [],
    Product: null
  },
  getters: {
    Products: state => state.Products,
    Product: state => state.Product
  },
  mutations: {
    SET_PRODUCTS: (state, Products) => {
      state.Products = Products
    },
    SET_PRODUCT: (state, Product) => {
      state.Product = Product
    },
  },
  
  actions: {
    getProducts: async ({commit}) => {
      const res = await axios.get('https://localhost:44391/api/products')
      commit('SET_PRODUCTS', res.data)
    },
    getOneProduct: async ({commit}, id) => {
      const res = await axios.get('https://localhost:44391/api/product' + id)
      commit('SET_PRODUCT', res.data)
    }
  }
}