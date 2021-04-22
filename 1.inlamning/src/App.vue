<template>
  <div>

    <navbar/>

    <div class="container mt-5">
      <router-view/>
      
    </div>
    
  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar'

export default {
components: {
  Navbar,
}

}
</script>

<style>

</style>
