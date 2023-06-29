<template>
    <div class="q-pa-md"  style="overflow: hidden;">
      <q-layout view="lHh lpr lFf">
        <q-page-container>
            <router-view />
        </q-page-container>
        © 2023 JoinTheXopo
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
      tab: ref('')
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
