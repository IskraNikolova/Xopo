<template>
  <roadmap-details />
</template>

<script>
export default {
  name: 'PageStaking',
  components: {
    RoadmapDetails: () => import('./../../components/roadmap-details.vue')
  }
}
</script>
