<template>
  <div class="">
    <h1>Startsida</h1>
    <p>Välkommen till Dammsugare</p>
    {{Products}}
    {{Product}}
  </div>
</template>

<script>


export default {
props:['Products', 'Product'],
  components: {
    
  }
}
</script>
