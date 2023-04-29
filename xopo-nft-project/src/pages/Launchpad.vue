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
        <q-btn label="Mint your own NFT" flat class="text-bold" size="xl" @click="mint({ contractName: 'koloda', count: 1, value: 1 })"/>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="3" img-src="~assets/BANER3.jpg" />
    </q-carousel>
    <div class="q-gutter-y-md">
        <q-tabs
          v-model="tab"
          class="row q-pa-xl text-h6"
          active-color="grey"
          indicator-color="transparent"
        >
          <q-tab class="col-4" name="now" label="Streaming Now" />
          <q-tab class="col-4" name="soon" label="Coming Soon" />
          <q-tab class="col-4" name="completed" label="Completed" />
        </q-tabs>

        <q-tab-panels
          class="custom-panel"
           :dark="appTheme==='dark'"
           v-model="tab"
           animated
        >
          <q-tab-panel name="now">
            <div class="text-h6">Streaming Now</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="soon">
            <div class="text-h6">
              <div>Coming Soon</div>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </q-tab-panel>

          <q-tab-panel name="completed">
            <div class="text-h6">Completed</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
    </div>
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
      tab: ref('now')
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
