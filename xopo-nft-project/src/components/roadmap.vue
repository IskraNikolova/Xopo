<template>
  <div>
    <div class="q-pa-xs cards row items-start q-gutter-md flex flex-center">
      <roadmap-card
        v-for="(item, i) in eras" v-bind:key="i"
        v-bind:img="require(`../assets/roadmap/${i + 1}.png`)"
        v-bind:item="item" v-bind:index="i + 1"
      />
    </div>
  </div>
</template>
<script>
import { c } from './../utils'

export default {
  name: 'Roadmap',
  components: {
    RoadmapCard: () => import('./roadmap-card.vue')
  },
  data () {
    return {
      eras: {}
    }
  },
  methods: {
    getEras () {
      this.eras = c.eras
    }
  },
  mounted () {
    this.getEras()
  }
}
</script>
<style>
  .animate-in-100 {
    transform: rotate(100deg);
  }
  .animate-in-120 {
    transform: rotate(120deg);
  }
  .animate-in-140 {
    transform: rotate(140deg);
  }
  .animate-in-160 {
    transform: rotate(160deg);
  }
  .animate-in-180 {
    transform: rotate(180deg);
  }
  .animate-in-200 {
    transform: rotate(200deg);
  }
  .animate-in-220 {
    transform: rotate(220deg);
  }
  .animate-in-240 {
    transform: rotate(240deg);
  }
  .animate-in-260 {
    transform: rotate(260deg);
  }
  .animate-in-280 {
    transform: rotate(280deg);
  }
  .down-100 {
    transition: transform 9s cubic-bezier(9.215, 0.610, 0.355, 1);
    transform: scale(0.1);
  }
  .down-120 {
    transition: transform 9s cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: scale(2);
  }
  .down-140 {
    transition: transform 18s;
    transform: scale(1.3);
  }
  .down-160 {
    transition: transform 8s;
    transform: scale(1.1);
  }
  .down-180 {
    transition: transform cubic-bezier(0.215, 0.610, 0.355, 1);
    transform: scale(1.4);
  }
  .down-200 {
    transition: transform cubic-bezier(0.215, 0.610, 0.355, 1);
    transform: scale(0.4);
  }
  .down-220 {
    transition: transform cubic-bezier(0.215, 0.610, 0.355, 1);
    transform: scale(0.4);
  }
  .down-240 {
    transition: transform cubic-bezier(0.215, 0.610, 0.355, 1);
    transform: scale(0.2);
  }
  .down-260 {
    transition: transform cubic-bezier(0.215, 0.610, 0.355, 1);
    transform: scale(1.4);
  }
  .down-280 {
    transition: transform cubic-bezier(0.215, 0.610, 0.355, 1);
    transform: scale(1);
  }
</style>
