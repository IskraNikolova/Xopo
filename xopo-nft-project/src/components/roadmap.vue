<template>
  <div class="q-pa-xs cards row items-start q-gutter-md flex flex-center">
    <roadmap-card v-bind:img="require('../assets/roadmap/1.2.png')" v-bind:title1="'DaVinci'" v-bind:title2="'Dawn'" v-bind:index="1"/>
    <roadmap-card v-bind:img="require('../assets/roadmap/2.png')" v-bind:title1="'Picasso'" v-bind:title2="'Beta'" v-bind:index="2"/>
    <roadmap-card v-bind:img="require('../assets/roadmap/3.png')" v-bind:title1="'Warhol'" v-bind:title2="'Bazaar'" v-bind:index="3"/>
    <roadmap-card v-bind:img="require('../assets/roadmap/4.png')" v-bind:title1="'Hokusai'" v-bind:title2="'Governance'" v-bind:index="4"/>
    <roadmap-card v-bind:img="require('../assets/roadmap/5.png')" v-bind:title1="'O\'Keeffe'" v-bind:title2="'Stake'" v-bind:index="5"/>
    <roadmap-card v-bind:img="require('../assets/roadmap/6.1.png')" v-bind:title1="'Michelangelo'" v-bind:title2="'Airdrop'" v-bind:index="6"/>
    <roadmap-card v-bind:img="require('../assets/roadmap/8.png')" v-bind:title1="'Kahlo'" v-bind:title2="'Portal'" v-bind:index="7"/>
    <roadmap-card v-bind:img="require('../assets/roadmap/9.png')" v-bind:title1="'Matisse'" v-bind:title2="'Lottery'" v-bind:index="8"/>
    <roadmap-card v-bind:img="require('../assets/roadmap/10.png')" v-bind:title1="'Van Gogh'" v-bind:title2="'Integration'" v-bind:index="9"/>
    <roadmap-card v-bind:img="require('../assets/roadmap/11.png')" v-bind:title1="'Kandinsky'" v-bind:title2="'Legacy'" v-bind:index="10"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Roadmap',
  computed: {
    ...mapGetters([
      'appTheme'
    ])
  },
  components: {
    RoadmapCard: () => import('components/roadmap-card.vue')
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
