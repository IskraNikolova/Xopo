<template>
  <q-page>
    <div class="q-mt-xl q-ml-md q-mr-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      class="carousel"
    >
      <q-carousel-slide :name="1" img-src="~assets/BANER.png" >
        <div class="absolute-bottom custom-caption carousel">
          <div class="text-h4">Introducing Our First Collection of NFTs</div>
          <br/>
          <q-btn outline class="text-subtitle1" color="white">Don't Miss Out!</q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="~assets/BANER3.jpg">
        <div class="absolute-bottom custom-caption carousel">
          <div class="text-h4 q-pb-md" style="color: white;font-style: bold;">Comming Soon</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PageIndex',
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
