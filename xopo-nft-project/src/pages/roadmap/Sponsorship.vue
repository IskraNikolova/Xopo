<template>
  <roadmap-details />
</template>

<script>
export default {
  name: 'PageSponsorship',
  components: {
    RoadmapDetails: () => import('./../../components/roadmap-details.vue')
  }
}
</script>
