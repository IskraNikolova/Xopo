<template>
    <roadmap />
</template>

<script>
export default {
  name: 'PageStaking',
  components: {
    Roadmap: () => import('src/components/roadmap.vue')
  },
  setup () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
