<template>
  <roadmap-details />
</template>

<script>
export default {
  name: 'PageWelcome',
  components: {
    RoadmapDetails: () => import('./../../components/roadmap-details.vue')
  }
}
</script>
