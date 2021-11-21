<template>
  <div class="card mb-4 h-100">
  <img
    :src="ProductImage"
      class="card-img-top p-4"
       alt="..."/>
       
  <div class="card-body">
    <h5 class="card-title">{{ ProductName }}</h5>
    <p class="card-text">{{ProductDesc}}</p>
    <router-link :to="{name: 'ProductInfo', params: {id: Product.id}}" type="button" class="btn btn-dark">Visa produkt</router-link>

  </div>
</div>
</template>

<script>
export default {
  name: 'ProductSida',
  props: ['Product']

}
</script>

<style>

</style>