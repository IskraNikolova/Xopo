<template>
  <q-page>
    <div
      class="q-mt-md row q-gutter-md"
      style="display: flex;
      justify-content: center;
      flex-wrap: wrap"
    >
      <div v-for=" (item, i) in all" v-bind:key="i">
        <card v-bind:item="item"/>
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
  components: {
    Card: () => import('components/card.vue')
  },
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
  async created () { // todo make on store
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
</style>
