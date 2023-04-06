<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header shadow-3 text-bold" style="color: #34342f;">
      <q-toolbar>
        <q-toolbar-title>
          <img src="~assets/horo_logo.png" class="q-pt-xs" style="width: 60px;">
        </q-toolbar-title>
        <q-tabs v-model="tab" shrink stretch>
          <q-tab name="tab1" label="about" />
          <q-tab name="tab2" label="Launchpad" />
          <q-tab name="tab3" label="Discover" />
          <q-tab name="tab4" label="artists" />
        </q-tabs>
        <q-space />
        <div>
          <q-btn flat @click.native="connectUserWallet()">
            <img src="~assets/wallet_icon_dark.png" class="q-mb-xs" style="width: 30px;">
          </q-btn>
          <div class="custom-badge">
            <q-avatar size="24px" class="q-mr-xs">
              <img :src="'data:image/png;base64,' + this.avatar + ''">
            </q-avatar>
            {{ formatAddress() }}
            </div>
          <!--<q-btn
           flat
           >
            <img src="~assets/person_icon_dark.png" class="q-ml-md q-mr-md q-mb-xs" style="width: 20px;">
          </q-btn>-->
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
import { ref } from 'vue'
import { mapGetters, mapActions } from 'vuex'

import {
  CONNECT_WALLET
} from './../store/app/types'

export default {
  name: 'MainLayout',
  data () {
    return {
      tab: ref('')
    }
  },
  computed: {
    ...mapGetters([
      'userAddress',
      'avatar'
    ])
  },
  created () {
    this.connectWallet()
  },
  methods: {
    ...mapActions({
      connectWallet: CONNECT_WALLET
    }),
    data () {
      if (!this.avatar) return ''
      return this.avatar
    },
    formatAddress () {
      if (!this.userAddress) return
      const first4 = this.userAddress.slice(0, 4)
      const last4 = this.userAddress
        .substr(this.userAddress.length - 4)
      return `${first4}...${last4}`
    },
    async connectUserWallet () {
      if (!this.userAddress) return
      await this.connectWallet()
    }
  }
}
</script>

<style scoped>
  .header {
   background: rgb(114,115,110);
 }
 .avatar {
  width: 35vw;
  max-width: 35px;
  min-height: 35px;
  max-height: 35px;
  border-radius: 5px;
  border-radius: 5px;
}
.custom-badge{
  font-size: 17px;
  padding: 3px;
  border: 0.135rem solid;
  border-color: #4D4D4A;
  border-radius: 9px;
}
</style>
