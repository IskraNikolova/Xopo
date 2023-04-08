<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { INIT_APP } from './store/app/types'

export default {
  name: 'App',
  methods: {
    ...mapActions({
      initApp: INIT_APP
    })
  },
  watch: {
    appTheme (val) {
      document.querySelector('html').dataset.theme = this.appTheme
    }
  },
  computed: {
    ...mapGetters([
      'appTheme'
    ])
  },
  async created () {
    try {
      await this.initApp()
      document.querySelector('html').dataset.theme = this.appTheme
    } catch (err) {
      console.log(err.message)
    }
  }
}
</script>
