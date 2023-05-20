<template>
    <div class="q-pa-md">
      <q-layout>
        <q-header class="header2 text-bold q-pb-xl">
          <q-toolbar>
            <q-toolbar-title class="text-center">
                <span class="q-ml-sm text-princess text-h5">Join The</span>
              <q-avatar>
                <img src="~assets/horo_logo_500.png" />
              </q-avatar>
            </q-toolbar-title>
          </q-toolbar>
        </q-header>

    <q-footer class="header2 text-bold">
        <q-tabs no-caps indicator-color="transparent" v-model="tab">
        <q-tab name="images" label="Home" />
        <q-tab name="videos" label="$XOPO" />
        <q-tab name="articles" label="Roadmap" />
        </q-tabs>
    </q-footer>

    <q-page-container>
        <router-view />
    </q-page-container>
    </q-layout>
</div>
</template>

<script>
import { ref } from 'vue'
import { mapGetters, mapActions } from 'vuex'

import { SET_THEME } from 'src/store/app/types'

export default {
  setup () {
    return {
      tab: ref('images')
    }
  },
  created () {
    this.setTheme('default')
  },
  computed: {
    ...mapGetters([
      'appTheme'
    ])
  },
  methods: {
    ...mapActions({
      setTheme: SET_THEME
    })
  }
}
</script>
