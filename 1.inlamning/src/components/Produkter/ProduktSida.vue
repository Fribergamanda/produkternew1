<template>
  <div class="card mb-4 h-100">
  <img
    :src="produkt.image"
      class="card-img-top p-4"
       alt="..."/>
       
  <div class="card-body">
    <h5 class="card-title">{{ produkt.name }}</h5>
    <p class="card-text">{{produkt.short}}</p>
    <router-link :to="{name: 'ProduktInfo', params: {id: produkt.id}}" type="button" class="btn btn-dark">Visa produkt</router-link>

  </div>
</div>
</template>

<script>
export default {
  name: 'produktSida',
  props: ['produkt']

}
</script>

<style>

</style>