<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <produkt-sida v-for="produkt in produkter" :key="produkt.id" :produkt="produkt" />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProduktSida from './ProduktSida'
export default {
  components: {
    ProduktSida
  },
  computed: {
    ...mapGetters(['produkter'])
  }
}
</script>

<style>
</style>