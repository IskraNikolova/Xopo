<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
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
      document.querySelector('html').dataset.theme = this.appTheme
    } catch (err) {
      console.log(err.message)
    }
  }
}
</script>
