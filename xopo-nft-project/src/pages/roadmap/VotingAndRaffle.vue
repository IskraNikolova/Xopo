<template>
  <roadmap-details />
</template>

<script>
export default {
  name: 'PageVotingAndBeta',
  components: {
    RoadmapDetails: () => import('./../../components/roadmap-details.vue')
  }
}
</script>
