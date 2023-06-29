<template>
    <div class="q-pa-md"  style="overflow: hidden;">
      <q-layout>
        <q-header class="header2 text-bold q-pb-xl">
          <q-toolbar>
            <q-toolbar-title class="q-ml-md">
                <q-avatar class="text-light q-ml-sm" @click="goToHome()">
                <img src="~assets/logos/three_logo.svg" style="width: 45px;" />
                </q-avatar>
               <span class="q-ml-sm text-h6 text-regular text-uppercase">Xopo Roadmap</span>
            </q-toolbar-title>
            <q-tabs v-model="tab" indicator-color="transparent" active-color="grey" class="text-regular my-tabs q-mr-md">
                <q-tab name="tab1" label="Home" @click="goToHome()" />
                <q-btn flat label="Epochs">
                    <q-menu fit  transition-show="flip-right"
          transition-hide="flip-left">
                    <q-list>
                        <q-item>
                            <q-item-section class="text-regulary text-uppercase text-primary q-pb-md q-pt-md"># Creative Stages</q-item-section>
                        </q-item>
                        <div v-for="(era, i) in eras" v-bind:key="i">
                            <q-item clickable @click="$router.push(`${i + 1}`)">
                                <q-item-section side class="text-primary">
                                    {{ i + 1 }}
                                </q-item-section>
                                <q-item-section>{{ era.title }}</q-item-section>
                            </q-item>
                            <q-separator />
                        </div>
                    </q-list>
                    </q-menu>
                </q-btn>
                <q-tab name="tab4" label="Discord" @click="goToDiscord()"/>
                <q-tab name="tab5" class="text-cyan-9" label="GitHub" @click="goToGitHub()"/>
            </q-tabs>
          </q-toolbar>
        </q-header>

    <q-page-container>
        <router-view />
    </q-page-container>
    </q-layout>
</div>
</template>

<script>
import { ref } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { openURL } from 'quasar'

import { SET_THEME } from 'src/store/app/types'

import { c } from './../utils'

export default {
  setup () {
    return {
      tab: ref('')
    }
  },
  created () {
    this.setTheme('default')
  },
  computed: {
    ...mapGetters([
      'appTheme'
    ]),
    eras () {
      if (!c.eras) return []
      return c.eras
    }
  },
  methods: {
    ...mapActions({
      setTheme: SET_THEME
    }),
    goToHome () {
      this.tab = ref('')
      this.$router.push('/')
    },
    goToDiscord () {
      openURL('https://discord.gg/q8KvRKtXHw')
    },
    goToGitHub () {
      openURL('https://github.com/IskraNikolova/Xopo')
    }
  }
}
</script>
