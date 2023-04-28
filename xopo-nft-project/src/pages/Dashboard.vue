<template>
  <q-page>
    <div>
      <div
      v-for=" (item, i) in userNFTsAllCollections"
      v-bind:key="i"
      >
      <div
        class="text-h4 text-capitalize"
        style="display: flex;
        justify-content: center;">{{ item.contractName}}
      </div>
      <div
        class="row q-mt-md q-gutter-md"
        style="display: flex;
        justify-content: center;
        flex-wrap: wrap"
      >
        <div v-for=" (collection, i) in item.nfts" v-bind:key="i">
          <card v-bind:item="collection"/>
        </div>
      </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {
  mapGetters
} from 'vuex'

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
      }
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
    getCollections () {
      if (!this.userNFTsAllCollections) return []
      return this.userNFTsAllCollections
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
