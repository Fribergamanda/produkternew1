import axios from 'axios'

export default {
  state: {
    produkter: [],
    produkt: null
  },
  getters: {
    produkter: state => state.produkter,
    produkt: state => state.produkt
  },
  mutations: {
    SET_PRODUKTER: (state, produkter) => {
      state.produkter = produkter
    },
    SET_PRODUKT: (state, produkt) => {
      state.produkt = produkt
    },
  },
  actions: {
    getProdukter: async ({commit}) => {
      const res = await axios.get('http://localhost:3000/produkter')
      commit('SET_PRODUKTER', res.data)
    },
    getOneProdukt: async ({commit}, id) => {
      const res = await axios.get('http://localhost:3000/produkter/' + id)
      commit('SET_PRODUKT', res.data)
    }
  }
}