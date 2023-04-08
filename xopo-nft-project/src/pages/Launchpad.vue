<template>
  <div class="q-pt-md">
    <q-carousel
    animated
    v-model="slide"
    arrows
    navigation
    infinite
    >
    <q-carousel-slide :name="1" img-src="~assets/BANER.png" style="height:10%;">
      <div class="absolute-bottom custom-caption carousel">
        <div class="text-h4">KOLODA</div>
        <div class="text-h5">by Miroslav Mihov (Eternal Mirror)</div>
      </div>
      <div class="absolute-right carousel custom-caption2">
        <q-btn label="Mint your own NFT" flat style="color: #ba5f11" class="text-bold" size="xl" />
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
    <q-carousel-slide :name="2" img-src="~assets/BANER2.jpg" />
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
.carousel
    border-radius: 13px
.custom-caption
    width: max-content
    text-align: left
    padding: 12px
    color: #ba5f11
    background-color: rgba(0, 0, 0, .3)
    border-radius: 12px
.content
    position: relative
    width: 80%
    margin: 0 auto

.right-text
    position: absolute
    top: 0
    right: 0
    width: 20%
.custom-caption2
    width: max-content
    height: 20%
    text-align: right
    padding: 12px
    color: #ba5f11
    background-color: rgba(0, 0, 0, .3)
    border-radius: 12px
    margin-top: 1%
.text-dec
    color: white
</style>
