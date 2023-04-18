<template>
    <q-page>
      <div class="q-mt-xl q-ml-md q-mr-md" v-for=" (item, i) in all" v-bind:key="i">
        {{ item.name }}
        <br/>
        <img :src="item.url" style="width: 600px;"/>
        <br/>
        {{ item.description }}
      </div>
    </q-page>
  </template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import { _getNFTByAddress } from './../modules/network'

export default {
  name: 'PageDashboard',
  data () {
    return {
      ids: [],
      all: []
    }
  },
  computed: {
    ...mapGetters([
      'userAddress'
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
      const { data } = await axios.get('https://ipfs.io/ipfs/bafybeibizh7z33h4ychpobwij7qbep4cawfkxfwbturta5hqa3nhzdvoli/' + id + '.json') // todo get from contract
      const { name, description, image } = data
      const url = 'https://ipfs.io/ipfs/' + image.replace('ipfs://', '')
      return { name, description, url }
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
