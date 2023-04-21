<template>
    <q-page>
      <div class="q-mt-xl q-ml-xl q-mr-md q-pa-md row items-start q-gutter-md">
        <div v-for=" (item, i) in all" v-bind:key="i">
          <table class="q-mr-xs" style="width: 300px; height: 350px; background-color: black;border-color: black; position: relative;">
          <tr>
            <td style="text-align: center; vertical-align: middle;">
              <img
                :id="item.name"
                :src="item.url"
                style="max-width: 300px;max-height: 200px"
                @mouseover="onOver(item.name)"
                @mouseleave="onLeave(item.name)"
              >
            </td>
          </tr>
          <tr>
            <td colspan="2" style="text-align: center;">
              <div style="z-index:10; position: absolute; top: 0; left: 0; width: 100%; height: 20%; background-color: rgba(0, 0, 0, 0.3);">
                <p style="color: white; font-size: 20px; margin-top: 40px; margin-left: 120px;z-index:2;">{{ item.name }}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="text-align: left;">
              <p style="color: grey; font-size: 16px;margin-left: 20px;">by Miroslav Mihov</p>
              <p style="color: white; font-size: 18px;margin-left: 20px;">{{ item.description }}</p>
            </td>
          </tr>
        </table>
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
    // todo
    onOver (id) {
      document.getElementById(id).style.maxWidth = '350px'
    },
    // todo
    onLeave (id) {
      document.getElementById(id).style.maxWidth = '300px'
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
