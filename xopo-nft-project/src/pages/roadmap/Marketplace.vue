<template>
  <roadmap-details />
</template>

<script>
export default {
  name: 'PageMarketplace',
  components: {
    RoadmapDetails: () => import('./../../components/roadmap-details.vue')
  }
}
</script>
