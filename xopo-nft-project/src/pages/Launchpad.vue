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
      <div class="absolute-bottom-right carousel custom-caption">
        <q-btn label="Mint your own NFT" flat class="text-bold" size="xl" @click="mint()"/>
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
import { mapGetters } from 'vuex'
import { ref } from 'vue'

import {
  _mint
} from './../modules/network'

export default {
  name: 'PageLaunchpad',
  computed: {
    ...mapGetters([
      'userAddress'
    ])
  },
  setup () {
    return {
      slide: ref(1),
      fabRight: ref(true)
    }
  },
  methods: {
    async mint () {
      const counts = 1
      await _mint({ counts, value: 1, from: this.userAddress })
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
