<template>

  <nav class="navbar navbar-expand-lg navbar-light py-4 ">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <i class="fas fa-store mx-2"></i> Dammsugare.shop
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Startsida</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/produkter">Produkter</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Om oss</router-link>
        </li>
      </ul>
  
      <ul class="navbar-nav">
        <li class="nav-item dropdown me-1">
          <a
            class="nav-link dropdown"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false">
            <i class="fas fa-shopping-cart"></i>
            <span v-show="cartItemCount" class="badge rounded-pill badge-notification bg-danger">{{cartItemCount}}</span>
          </a>

          <ul class="dropdown-menu dropdown-menu-end shopping-V" aria-labelledby="navbarDropdown">
            <shopping-v />
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false">
            <i class="fas fa-user"></i>
          </a>

          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            Inställningar/konto
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingV from '../Shopping/ShoppingV'
export default {
  components: {
    ShoppingV
  },
  computed: {
    ...mapGetters(['cartItemCount'])
  } 
}
</script>

<style scoped>


  .navbar {
    background-color: rgb(189, 178, 163)

  }


</style>


