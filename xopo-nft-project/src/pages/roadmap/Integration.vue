<template>
  <roadmap-details />
</template>

<script>
export default {
  name: 'PageIntegration',
  components: {
    RoadmapDetails: () => import('./../../components/roadmap-details.vue')
  }
}
</script>
