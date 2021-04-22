<template>
  <div class="cart-item">
    <div class="p-2">
      <div class="kundvagn">
        <img :src="item.produkt.image" alt="" class="img-fluid">
        <div>
          <div><strong>{{ item.produkt.name }}</strong></div>
          <div><small>{{ item.quantity }} x {{ item.produkt.price }}kr</small></div>
        </div>
      </div>
      <div>
        <div class="btn-group btn-group-sm me-2" role="group" area-label="quantity">
          <button class="btn btn-dark" @click.stop="">-</button>
          <button class="btn btn-dark" @click.stop="">+</button>
        </div>
        <button class="btn btn-danger btn-sm " @click.stop=""><i class="fas fa-trash"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>
.cart-item{
  width: auto;
}

</style>
 d-flex justify-content-between align-items-center