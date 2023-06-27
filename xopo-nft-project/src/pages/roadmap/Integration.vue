<template>
    <roadmap />
</template>

<script>
export default {
  name: 'PageIntegration',
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
