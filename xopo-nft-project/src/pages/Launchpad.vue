<template>
  <div class="q-pt-xl">
    <div class="row">
      <div class="col-4"></div><div class="col-5"></div>
      <div class="col-3">
        <q-tabs
        v-model="slide"
        class="row text-h6"
        active-color="grey-6"
        indicator-color="transparent"
      >
        <q-tab class="col-1 text-capitalize" :name="1" label="Streaming Now" />
        <q-tab class="col-1 text-capitalize" :name="2" label="Coming Soon" />
        <q-tab class="col-1 text-capitalize" :name="3" label="Completed" />
      </q-tabs>
      </div>
    </div>
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
    @scroll = "autoplay = false"
    >
    <q-carousel-slide :name="1" img-src="~assets/BANER.png">
      <div class="absolute-bottom custom-caption carousel">
        <div class="text-h4">KOLODA</div>
        <div class="text-h5">by Miroslav Mihov (Eternal Mirror)</div>
      </div>
      <div class="absolute-bottom-right carousel custom-caption">
        <q-btn label="Mint your own NFT" flat class="text-bold" size="xl" @click="mint({ contractName: 'koloda', count: 1, value: 1 })"/>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="2" img-src="~assets/BANER3.jpg" />
    <q-carousel-slide :name="3" img-src="~assets/BANER3.jpg" />
    <q-carousel-slide :name="4" img-src="~assets/BANER3.jpg" > test </q-carousel-slide>
    <q-carousel-slide :name="5" img-src="~assets/BANER3.jpg" > test2 </q-carousel-slide>
    </q-carousel>
    <q-tab-panels
      class="header2"
        :dark="appTheme==='dark'"
        v-model="slide"
        animated
    >
      <q-tab-panel :name="1">
        <div class="text-h6">Streaming Now</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel :name="4">
        <div class="text-h6">Streaming Now</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. TEST
      </q-tab-panel>

      <q-tab-panel :name="5">
        <div class="text-h6">Streaming Now</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. TEST
      </q-tab-panel>

      <q-tab-panel :name="2">
        <div class="text-h6">
          <div>Coming Soon</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </q-tab-panel>

      <q-tab-panel :name="3">
        <div class="text-h6">Completed</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { ref } from 'vue'

import {
  mapGetters,
  mapActions
} from 'vuex'

import {
  MINT_NFT
} from './../store/app/types'

export default {
  name: 'PageLaunchpad',
  computed: {
    ...mapGetters([
      'userAddress',
      'appTheme'
    ])
  },
  setup () {
    return {
      slide: ref(1),
      fabRight: ref(true),
      autoplay: ref(true)
    }
  },
  methods: {
    ...mapActions({
      mint: MINT_NFT
    })
  }
}
</script>

<style lang="sass" scoped>
</style>
