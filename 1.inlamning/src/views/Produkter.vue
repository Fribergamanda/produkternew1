<template>
  <div>
    <produkt-deck />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProduktDeck from '../components/Produkter/ProduktDeck'
export default {
  components: {
    ProduktDeck
  },
  methods: {
    ...mapActions(['getProdukter'])
  },
  created() {
    this.getProdukter()
  }
}
</script>


<style>
</style>