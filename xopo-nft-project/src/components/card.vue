<template>
  <table class="q-mr-xs" style="width: 330px; height: 350px;border: 0.1px solid grey;border-radius: 2%; position: relative;">
      <tr>
          <td style="text-align: center; vertical-align: middle;">
              <img
              :id="item.name"
              :src="item.url"
              style="max-width: 250px;max-height: 200px;margin-top: 20px;"
              >
          </td>
          </tr>
          <tr>
      </tr>
      <tr>
          <td colspan="2">
            <div :dark="appTheme==='dark'" class="text-light text-no-wrap" style="font-size: 18px;margin-left: 40px;">
              {{ item.name }}
              <p class="text-lightIt" style="color: grey; font-size: 15px;">by Miroslav Mihov</p>
              <p class="text-light" :dark="appTheme==='dark'" style="font-size: 15px;">{{ item.description }}</p>
            </div>
          </td>
      </tr>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'appTheme'
    ])
  }
}
</script>
