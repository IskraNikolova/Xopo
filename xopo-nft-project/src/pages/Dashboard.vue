<template>
    <q-page>
      <div class="q-mt-xl q-ml-xl q-mr-md q-pa-md row items-start q-gutter-md">
        <div v-for=" (item, i) in all" v-bind:key="i">
            <q-card class="my-card" :dark="appTheme==='dark'">
                <q-img :src="item.url" class="my-card-section" >
                    <div class="text-subtitle2 absolute-top text-right">
                        {{ item.name }}
                    </div>
                </q-img>

                <q-card-section>
                    <div class="text-subtitle2 text-grey">by Miroslav Mihov</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    {{ item.description }}
                </q-card-section>
            </q-card>
        </div>
      </div>
    </q-page>
  </template>

<script>
import {
  mapGetters
} from 'vuex'

import axios from 'axios'

import {
  _getTokenUri,
  _getNFTByAddress
} from './../modules/network'

export default {
  name: 'PageDashboard',
  data () {
    return {
      ids: [],
      all: []
    }
  },
  watch: {
    userAddress: {
      handler: async function (v) {
        this.ids = []
        this.all = []
        await this.getIds()
        await this.getAll()
      }
    }
  },
  computed: {
    ...mapGetters([
      'userAddress',
      'appTheme'
    ])
  },
  async created () {
    await this.getIds()
    await this.getAll()
  },
  methods: {
    async getIds () {
      this.ids = await _getNFTByAddress(this.userAddress)
    },
    async getData (id) {
      try {
        const { tokenURI } = await _getTokenUri(id)
        const uri = this.replace(tokenURI)
        const { data } = await axios.get(uri)
        const { name, description, image } = data
        const url = this.replace(image)
        return { name, description, url }
      } catch (err) {
        console.log(err)
      }
    },
    replace (uri) {
      if (!uri) return ''
      return 'https://ipfs.io/ipfs/' + uri.replace('ipfs://', '')
    },
    async getAll () {
      for (let i = 0; i < this.ids.length; i++) {
        this.all.push(await this.getData(this.ids[i]))
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
.my-card-section
  height: 100%
  max-height: 210px
  min-height: 120px
</style>
