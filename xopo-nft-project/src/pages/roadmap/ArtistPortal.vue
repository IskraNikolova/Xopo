<template>
  <roadmap-details />
</template>

<script>
export default {
  name: 'PageArtistPortal',
  components: {
    RoadmapDetails: () => import('./../../components/roadmap-details.vue')
  }
}
</script>
