<template>
  <div>
    <roadmap />
    <p class="title text-uppercase text-bold q-mt-xl">{{ title }} </p>
    <p class="subTitle" style="font-size: 15pt;">"{{ subTitle }}"</p>
    <div class="row paragraph" style="margin-top: 4%;text-align: right;">
      <div class="col q-pl-xl"><p><span class="text-bold">{{ text1 }}</span>: {{ text2 }}</p></div>
      <div class="col">
        <span class="animeRoadmap"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { c } from './../../utils'

export default {
  name: 'PageSponsorship',
  components: {
    Roadmap: () => import('src/components/roadmap.vue')
  },
  created () {
    this.index = this.$route.path.slice(1) - 1
  },
  computed: {
    title: function () {
      const era = this.getEras()
      return era ? era.title : ''
    },
    text1: function () {
      const era = this.getEras()
      return era ? era.text.split(':')[0] : ''
    },
    text2: function () {
      const era = this.getEras()
      return era ? era.text.split(':')[1] : ''
    },
    subTitle () {
      const era = this.getEras()
      return era ? era.subTitle : ''
    }
  },
  setup () {
    return {
      era: {},
      index: null
    }
  },
  methods: {
    getEras () {
      if (!c.eras[this.index]) return { text: '', title: '', subTitle: '' }
      return c.eras[this.index]
    }
  }
}
</script>

<style scoped>
.animeRoadmap {
  position: static;
  display: block;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url('./../../assets/roadmap/gifs/10.gif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 7s infinite alternate ease-in-out;
  animation-delay: 1s;
  width: 60%;
  height: 90%;
}
</style>
