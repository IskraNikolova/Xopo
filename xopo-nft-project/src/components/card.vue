<template>
   <table class="q-mr-xs" style="width: 330px; height: 350px; background-color: black;border-color: black; position: relative;">
        <tr>
            <td style="text-align: center; vertical-align: middle;">
                <img
                :id="item.name"
                :src="item.url"
                style="max-width: 250px;max-height: 200px"
                >
            </td>
            </tr>
            <tr>
            <td colspan="2" style="text-align: center;">
                <div style="z-index:10; position: absolute; top: 0; left: 0; width: 100%; height: 20%; background-color: rgba(0, 0, 0, 0.3);">
                <p style="color: white; font-size: 20px; margin-top: 40px;white-space: nowrap; text-align: right;z-index:2;" class="q-mr-xl">{{ item.name }}</p>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="2" style="text-align: left;">
                <p style="color: grey; font-size: 16px;margin-left: 20px;">by Miroslav Mihov</p>
                <p style="color: white; font-size: 18px;margin-left: 20px;">{{ item.description }}</p>
            </td>
        </tr>
    </table>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
