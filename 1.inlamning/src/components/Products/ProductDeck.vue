<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <product-sida v-for="Product in Products" :key="Product.id" :Product="Product" />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductSida from './ProductSida'
export default {
  components: {
    ProductSida
  },
  computed: {
    ...mapGetters(['Products'])
  }
}
</script>

<style>
</style>