<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header shadow-3 text-bold" style="color: #34342f;">
      <q-toolbar>
        <q-toolbar-title>
          <img src="~assets/horo_logo.png" class="q-pt-xs" style="width: 60px;">
        </q-toolbar-title>
        <q-tabs v-model="tab" shrink stretch>
          <q-tab name="tab1" label="Launchpad" />
          <q-tab name="tab2" label="Discover" />
          <q-tab name="tab3" label="artist" />
        </q-tabs>
        <q-space />
        <div>
          <q-btn flat @click.native="connectUserWallet()" v-if="userAddres">
            <img src="~assets/wallet_icon_dark.png" class="q-mb-xs" style="width: 30px;">
          </q-btn>
          <span style="color:beige" v-else>{{ userAddress }}</span>
          <q-btn
           flat
           >
            <img src="~assets/person_icon_dark.png" class="q-ml-md q-mr-md q-mb-xs" style="width: 20px;" v-if="!avatar">
            <img :src="avatar" class="q-mb-xs" style="width: 30px;" v-else>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-footer elevated class="header shadow-3 text-bold" style="color: #34342f;">
      <q-toolbar>
        <q-toolbar-title><img src="~assets/horo_logo_BW.png" class="q-pt-xs" style="width: 60px;"></q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// TODO watch changes of address, get another lib for images
import { ref } from 'vue'
import { mapGetters, mapActions } from 'vuex'

import {
  CONNECT_WALLET
} from './../store/app/types'
import { avatar } from 'src/store/app/getters'

export default {
  name: 'MainLayout',
  data () {
    return {
      tab: ref(''),
      user: ''
    }
  },
  computed: {
    ...mapGetters([
      'userAddress',
      'avatar'
    ])
  },
  created () {
    console.log(avatar)
  },
  methods: {
    ...mapActions({
      connectWallet: CONNECT_WALLET
    }),
    connectUserWallet () {
      this.connectWallet()
    }
  }
}
</script>

<style scoped>
  .header {
   background: rgb(114,115,110);
 }
</style>
