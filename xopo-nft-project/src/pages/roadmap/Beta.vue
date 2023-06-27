<template>
  <roadmap-details />
</template>

<script>
export default {
  name: 'PageBeta',
  components: {
    RoadmapDetails: () => import('./../../components/roadmap-details.vue')
  }
}
</script>
