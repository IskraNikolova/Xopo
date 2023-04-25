<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header text-bold">
      <q-toolbar>
        <q-toolbar-title>
          <img src="~assets/horo_logo_bg.png" class="q-pt-xs" style="width: 60px;" @click="goToHome()">
          <img src="~assets/horo_logo_tx.png" class="q-pt-xs" style="width: 60px;" @click="goToHome()">
        </q-toolbar-title>
        <q-tabs v-model="tab" shrink stretch>
          <q-tab name="tab1" label="about" @click="goToAbout()"/>
          <q-tab name="tab2"  class="text-blue" label="launchpad" @click="goToLaunchpad()"/>
          <q-tab name="tab3" label="discover" @click="goToDiscover()"/>
          <q-tab name="tab4" label="artists" @click="goToArtists()"/>
          <q-tab name="tab5" class="text-orange" label="Create your own NFTs" @click="goToRequestForNFTs()"/>
        </q-tabs>
        <q-space />
        <div v-if="!getStatus()">
          Wrong Network
        </div>
        <div>
          <q-btn flat @click.native="connectUserWallet()" v-if="!getUser()">
            <img src="~assets/wallet_icon_dark.png" class="q-mb-xs" style="width: 30px;" v-if="appTheme!=='dark'">
            <img src="~assets/wallet_icon_white.png" class="q-mb-xs" style="width: 30px;" v-else>
            <tooltip-style v-bind:text="'Connect Wallet'" />
          </q-btn>
          <q-btn-dropdown
            v-else
            split
            flat
            push
            no-caps
          >
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <q-icon left :name="'img:data:image/png;base64,' + avatar + ''" />
                <div class="text-center">
                  {{ formatAddress(userAddress) }}<br>
                  <span class="text-h7">{{ getBalanceByUser({ userAddress }) }}</span><span> AVAX</span>
                </div>
              </div>
            </template>
            <q-item class="op" clickable :dark="appTheme === 'dark'" v-close-popup name="6" @click="goToDashboard()" v-ripple>
              <q-item-section avatar>
                <q-img src="./../assets/person_icon.png" style="width: 25px;"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>My dashboard</q-item-label>
              </q-item-section>
            </q-item>
            <q-list separator :dark="appTheme==='dark'" >
              <q-item class="op" clickable v-for=" (account, i) in accounts" v-bind:key="i" :dark="appTheme === 'dark'" v-close-popup @click="setDefaultWallet({ account })" v-ripple>
                <q-item-section avatar>
                  <q-icon left :name="'img:data:image/png;base64,' + getAvatar(account) + ''" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ getAddress(account) }}</q-item-label>
                  <q-item-label caption><span class="text-primary">Balance</span> {{ getBalance(account) }} <span class="text-bold text-negative">AVAX</span></q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="info" color="amber" />
                  <tooltip-style v-bind:text="'Set ' + formatAddress(getAddress(account)) + ' as your default wallet address.'" />
                </q-item-section>
              </q-item>
              <q-item clickable :dark="appTheme === 'dark'" v-close-popup @click="connectToWallets()">
                <q-item-section avatar>
                  <q-icon left name="logout" />
                </q-item-section>
                <q-item-section>
                  <q-item-label> Connect / Disconnect a New Address</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <!--<q-btn
           flat
           >
            <img src="~assets/person_icon_dark.png" class="q-ml-md q-mr-md q-mb-xs" style="width: 20px;">
          </q-btn>-->
        </div>
      </q-toolbar>
    </q-header>

    <q-footer class="header text-bold">
      <q-toolbar>
        <q-btn flat icon="nights_stay" v-if="appTheme === 'default'" @click="switchTheme('dark')" />
        <q-btn flat icon="wb_sunny" v-else @click="switchTheme('default')" />
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
      <div class="flex flex-center q-mt-xl"><img src="~assets/horo_logo_BW.png" class="q-pt-xs" style="width: 100px;"></div>
      <div class="flex flex-center q-mb-xl">By Xopo with ❤️ for artists everywhere.</div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

import {
  mapGetters,
  mapActions
} from 'vuex'

import {
  round
} from './../utils'

import {
  SET_THEME,
  CONNECT_WALLET,
  CONNECTED_WALLETS,
  SET_DEFAULT_WALLET
} from './../store/app/types'

export default {
  name: 'MainLayout',
  components: {
    TooltipStyle: () => import('components/tooltip-style.vue')
  },
  data () {
    return {
      tab: ref('')
    }
  },
  computed: {
    ...mapGetters([
      'isSignUp',
      'accounts',
      'appTheme',
      'userAddress',
      'appTheme',
      'avatar',
      'isRight'
    ])
  },
  watch: {
    isRight: {
      handler: function (v) {
        this.getStatus()
      }
    }
  },
  methods: {
    ...mapActions({
      setTheme: SET_THEME,
      connectWallet: CONNECT_WALLET,
      connectToWallets: CONNECTED_WALLETS,
      setDefaultWallet: SET_DEFAULT_WALLET
    }),
    switchTheme (theme) {
      if (!theme) return
      this.setTheme(theme)
    },
    goToLaunchpad () {
      this.$router.push('/launchpad')
    },
    goToAbout () {
      this.$router.push('/about')
    },
    goToDiscover () {
      this.$router.push('/discover')
    },
    goToArtists () {
      this.$router.push('/artists')
    },
    goToHome () {
      this.tab = ref('')
      this.$router.push('/')
    },
    goToRequestForNFTs () {
      this.$router.push('/requestNFTs')
    },
    goToDashboard () {
      if (!this.userAddress) return
      this.tab = ref('')
      this.$router.push(`/dashboard/${this.userAddress}`)
    },
    getStatus () {
      return this.isRight
    },
    getBalance (account) {
      if (!account) return
      return account.balance
    },
    getBalanceByUser ({ userAddress }) {
      if (!userAddress) return
      const balance = this.accounts
        .find(a => a.userAddress === userAddress)
        .balance

      return round(balance, 100)
    },
    getUser () {
      return this.userAddress
    },
    getAddress (account) {
      if (!account) return
      return account.userAddress.toString()
    },
    getAvatar (account) {
      if (!account) return
      return account.avatar
    },
    onLogout () {
      this.logout()
    },
    data () {
      if (!this.avatar) return ''
      return this.avatar
    },
    formatAddress (address) {
      if (!address) return
      const first4 = address.slice(0, 4)
      const last4 = address
        .substr(address.length - 4)
      return `${first4}...${last4}`
    },
    async connectUserWallet () {
      // if (!this.userAddress) return
      await this.connectWallet()
    }
  }
}
</script>

<style scoped>
</style>
<!-- {
  "name": "Harvest",
  "description": "Harvest - chalk on cardboard, 2016 - by Miroslav Mihov (Eternal Mirror)",
  "image": "ipfs://bafybeigfrrmbyok2rhk2e72pmwha5udxqvhvzk3262fy5glfswwn3kpb3y/1.jpg",
  "collection": "Koloda",
  "attributes": []
} -->
