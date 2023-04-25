<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import {
  INIT_APP,
  IS_ON_FOCUS
} from './store/app/types'

export default {
  name: 'App',
  methods: {
    ...mapActions({
      initApp: INIT_APP,
      isOnFocus: IS_ON_FOCUS
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
      window.addEventListener('blur', (event) => {
        this.isOnFocus(false)
        // event.preventDefault()
      })
      window.addEventListener('focus', (event) => {
        this.isOnFocus(true)
        // event.preventDefault()
      })
    } catch (err) {
      console.log(err.message)
    }
  }
}
</script>
