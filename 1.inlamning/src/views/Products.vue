<template>
  <div>
    <Product-deck />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductDeck from '../components/Products/ProductDeck'
export default {
  components: {
    ProductDeck
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>


<style>
</style>