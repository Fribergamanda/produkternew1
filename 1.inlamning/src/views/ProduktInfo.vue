<template>
  <div>
    <div class="container my-5 py-5 z-depth-1 agda">

  <section class="text-center">
    <h6 class=" mb-5 rubrik p-1 text-dark">{{produkt.name}}</h6>
    <div class="row">
      <div class="col-lg-6">
        <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">


          <div class="carousel-inner text-center text-md-left" role="listbox">
            <div class="carousel-item active">
              <img :src="produkt.image"
                alt="First slide" class="img-fluid">
            </div>
          </div>

            <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div class="col-lg-5 text-center text-md-left">

        <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
          <strong>{{ produkt.name }}</strong>
        </h2>
        <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4 mt-4">
          <span class="red-text font-weight-bold">
            <strong>{{ produkt.price }}kr</strong>
          </span>
        </h3>

        <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

          <div class="card">
            <div class="card-header" role="tab" id="headingOne1">
              <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                aria-controls="collapseOne1">
                <h5 class="mb-0 text-dark">
                  Beskrivning
                  <i class="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

            <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
              data-parent="#accordionEx">
              <div class="card-body">
                 {{ produkt.desc.slice(0,300) }}
              </div>
            </div>
          </div>

      </div>
        <section class="color">
          <div class="mt-5">
            <div class="row mt-3">
              <div class="col-md-12 text-center text-md-left text-md-right">
                <button class="btn btn-white btn-rounded" @click="addProduktToCart({ produkt, quantity })">
                  <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Lägg till i kundvagnen </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</div>
</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['getOneProdukt', 'addProduktToCart'])
  },
  computed: {
    ...mapGetters(['produkt'])
  },
  created() {
    this.getOneProdukt(this.id)
  }
}
</script>

<style scoped>
.rubrik{
  background-color: rgba(196, 187, 167, 0.425);
}
.agda{
  background-color: rgba(196, 187, 167, 0.185);
}
img{
  border: solid rgba(0, 0, 0, 0.39);
  background-color: white;
  margin-top: 60px;
}

</style>