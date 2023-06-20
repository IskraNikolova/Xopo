<template>
  <table class="q-mr-xs q-mb-xs q-ml-xs" style="width: 430px; height: 450px;border-left: 0.1px solid grey;border-top: 0.1px solid grey;border-top-left-radius: 2%; position: relative;">
      <tr>
          <td style="text-align: center; vertical-align: middle;">
              <q-img
              :id="item.name"
              :src="item.url"
              style="max-width: 350px;max-height: 300px;margin-top: 20px;"
              />
          </td>
          </tr>
          <tr>
      </tr>
      <tr>
          <td colspan="2">
            <div :dark="appTheme==='dark'" class="text-light text-no-wrap" style="font-size: 18px;margin-left: 40px;">
              {{ item.name }}&nbsp; #{{item.id }}
              <p class="text-lightIt" style="color: grey; font-size: 15px;">{{ author }} <span class="text-capitalize">"{{ contractName }}"</span></p>
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
    },
    contractName: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: false
    }
  },
  computed: {
    ...mapGetters([
      'appTheme'
    ])
  }
}
</script>
