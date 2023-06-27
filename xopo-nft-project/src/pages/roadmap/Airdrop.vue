<template>
  <roadmap-details />
</template>

<script>
export default {
  name: 'PageAirdrop',
  components: {
    RoadmapDetails: () => import('./../../components/roadmap-details.vue')
  }
}
</script>
