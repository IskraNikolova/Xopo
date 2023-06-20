<template>
  <q-page>
    <div>
      <div
      v-for=" (item, i) in collection"
      v-bind:key="i"
      >
      <!--<div
        class="text-h4 text-capitalize"
        style="display: flex;
        justify-content: center;">{{ item.contractName }}
      </div>-->
      <div
        class="row q-mt-md q-gutter-md"
        style="display: flex;
        justify-content: center;
        flex-wrap: wrap"
      >
        <div v-for=" (collection, i) in item.nfts" v-bind:key="i">
          <card v-bind:item="collection"  v-bind:author="'by Miroslav Mihov'" v-bind:contractName="item.contractName"/>
        </div>
      </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

import {
  SET_USER_COLLECTIONS
} from './../store/app/types'

export default {
  name: 'PageDashboard',
  components: {
    Card: () => import('components/card.vue')
  },
  data () {
    return {
      collection: {}
    }
  },
  created () {
    if (!this.userAddress) return []
    if (!this.userNFTsAllCollections(this.userAddress)) return []
    this.collection = this.userNFTsAllCollections(this.userAddress)
  },
  watch: {
    userAddress: {
      handler: async function (v) {
        await this.setUserCollection()
        if (!this.userAddress) return {}
        if (!this.userNFTsAllCollections(this.userAddress)) return {}
        this.collection = this.userNFTsAllCollections(this.userAddress)
      },
      deep: true,
      immediate: true
    },
    userNFTsAllCollections: {
      handler: async function (v) {
        if (!this.userAddress) return {}
        if (!this.userNFTsAllCollections(this.userAddress)) return {}
        this.collection = this.userNFTsAllCollections(this.userAddress)
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    ...mapGetters([
      'userAddress',
      'appTheme',
      'userNFTsAllCollections'
    ])
  },
  methods: {
    ...mapActions({
      setUserCollection: SET_USER_COLLECTIONS
    })
  }
}
</script>

<style lang="sass" scoped>
</style>
