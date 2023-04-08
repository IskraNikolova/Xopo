<template>
  <div class="q-pt-md">
    <q-carousel
    animated
    v-model="slide"
    arrows
    navigation
    infinite
    >
    <q-carousel-slide :name="1" img-src="~assets/BANER.png">
      <div class="absolute-bottom custom-caption carousel">
        <div class="text-h4">KOLODA</div>
        <div class="text-h5">by Miroslav Mihov (Eternal Mirror)</div>
      </div>
      <div class="absolute-right carousel custom-caption2">
        <q-btn label="Mint your own NFT" flat class="text-bold" size="xl" />
      </div>
      <div class="text-dec">
        BEAUTIFUL,
        CLASSICAL,
        ABSTRACT landscapes,
        ARTWORKS with vivid colors,
        PAINTINGS with mysterious figurative
        SYMBOLIC images,
        COLLECTION carries a substantial charge of natural,
        HUMANE,
        AESTHETIC,
        PHILOSOPHICAL energy.
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="3" img-src="~assets/BANER3.jpg" />
    </q-carousel>
   <div class="row q-pa-xl text-h6">
    <div class="col-3">Streaming Now</div>
    <div class="col-3">Coming Soon</div>
    <div class="col-3">Completed</div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'PageLaunchpad',
  setup () {
    return {
      slide: ref(1),
      fabRight: ref(true)
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
