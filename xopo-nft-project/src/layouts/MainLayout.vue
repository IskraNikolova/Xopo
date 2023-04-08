<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header shadow-3 text-bold" style="color: #34342f;" :dark="appTheme==='dark'">
      <q-toolbar>
        <q-toolbar-title>
          <img src="~assets/horo_logo.png" class="q-pt-xs" style="width: 60px;" @click="goToHome()">
        </q-toolbar-title>
        <q-tabs v-model="tab" shrink stretch>
          <q-tab name="tab1" label="about" @click="goToAbout()"/>
          <q-tab name="tab2" label="launchpad" @click="goToLaunchpad()"/>
          <q-tab name="tab3" label="discover" @click="goToDiscover()"/>
          <q-tab name="tab4" label="artists" @click="goToArtists()"/>
        </q-tabs>
        <q-space />
        <div v-if="!getStatus()">
          <div class="custom-badge2">
            Wrong Network
          </div>
        </div>
        <div>
          <q-btn flat @click.native="connectUserWallet()" v-if="!getUser()">
            <img src="~assets/wallet_icon_dark.png" class="q-mb-xs" style="width: 30px;">
            <tooltip-style v-bind:text="'Connect Wallet'" />
          </q-btn>
          <q-btn v-else flat class="inset-shadow btn-custom" >
            <q-avatar size="35px" class="q-mr-md inset-shadow-down">
              <img :src="'data:image/png;base64,' + this.avatar + ''">
            </q-avatar>
            <span class="text-h7 address">{{ formatAddress() }}</span>
          </q-btn>
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
        <q-btn flat icon="nights_stay" v-if="appTheme === 'default'" @click="switchTheme('dark')" />
        <q-btn flat icon="wb_sunny" v-else @click="switchTheme('default')" />
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
  SET_THEME,
  CONNECT_WALLET
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
      connectWallet: CONNECT_WALLET,
      setTheme: SET_THEME
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
      this.$router.push('/')
    },
    getStatus () {
      return this.isRight
    },
    getUser () {
      return this.userAddress
    },
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
      // if (!this.userAddress) return
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
.custom-badge {
  font-size: 17px;
  padding: 3px;
  border: 0.135rem solid;
  border-color: #4D4D4A;
  border-radius: 9px;
}
.custom-badge2 {
  font-size: 17px;
  padding: 3px;
  margin-right: 5px;
  border: 0.135rem solid;
  border-color: #4D4D4A;
  border-radius: 9px;
}
.btn-custom {
  border-radius: 9px;
}
.address {
  color: white;
}
</style>
