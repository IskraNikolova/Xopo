<template>
  <roadmap-details />
</template>

<script>
export default {
  name: 'PageTokensAndDAO',
  components: {
    RoadmapDetails: () => import('./../../components/roadmap-details.vue')
  }
}
</script>
