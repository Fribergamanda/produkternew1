<template>
  <div class="vagn">
    <shopping-prod v-for="item in shoppingV" :key="item.ProductId" :item="item" />

    <div v-if="shoppingV.length < 1" class="cart-item">
      <div class="p-2 d-flex justify-content-center align-items-center">
        Din kundvagn är tom.
      </div>
      <div class="dropdown-divider"></div>
    </div>

    <div class="p-3">
      <div class="ms-1">
        <div class="total-price">
          Totalt:<span class="ms-1">9000kr</span>
        </div>
        <small class="text-muted">inkl. moms</small>
      </div>
      <button class="btn btn-sm btn-dark">Gå till kassan</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingProd from './ShoppingProd'
export default {
  components:{
    ShoppingProd
  },

  computed: {
    ...mapGetters(['shoppingV'])
  }
}
</script>

<style scoped>
.vagn{
  border: 2px solid rgba(0, 0, 0, 0.486);
}
</style>