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
           style="background-color: rgb(91 92 89);"
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
            <div class="text-h6">
              <div>Coming Soon</div>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div class="text-h6 ">
              <div>Coming Soon</div>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div class="text-h6">
              <div>Coming Soon</div>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div class="text-h6">
              <div>Coming Soon</div>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div class="text-h6">
              <div>Coming Soon</div>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div class="text-h6">
              <div>Coming Soon</div>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div class="text-h6">
              <div>Coming Soon</div>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div class="text-h6">
              <div>Coming Soon</div>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
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
import { mapGetters } from 'vuex'
import { ref } from 'vue'

import {
  _mint
} from './../modules/network'

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
    async mint () {
      await _mint({ counts: 1, value: 1, from: this.userAddress }) // todo
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
