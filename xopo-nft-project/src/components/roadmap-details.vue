<template>
    <div>
      <roadmap />
      <p class="title text-bold q-mt-xl">{{ title }}</p>
      <p class="subTitle" style="font-size: 15pt;">{{ subTitle }}</p>
      <div class="row paragraph q-ml-xl" style="margin-top: 4%;text-align: right;">
        <div class="col q-pl-xl"><p><span class="text-bold">{{ text1 }}</span>: {{ text2 }}</p></div>
        <div class="col">
          <span class="animeRoadmap" :style="backgroundStyle"></span>
        </div>
      </div>
      <media-links />
    </div>
</template>

<script>
import { c } from './../utils'

export default {
  name: 'PageAirdrop',
  components: {
    Roadmap: () => import('./roadmap.vue'),
    MediaLinks: () => import('./mediaLinks.vue')
  },
  computed: {
    index () {
      return this.$route.path.slice(1) - 1
    },
    era () {
      if (!c.eras[this.index]) return { text: '', title: '', subTitle: '' }
      return c.eras[this.index]
    },
    title () {
      return this.era.title
    },
    text1 () {
      return this.era.text.split(':')[0]
    },
    text2 () {
      return this.era.text.split(':')[1]
    },
    subTitle () {
      return this.era.subTitle
    },
    backgroundStyle () {
      const index = this.$route.path.slice(1)
      const imageUrl = require(`./../assets/roadmap/gifs/${index}.gif`)
      return `background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url('${imageUrl}');
           background-repeat: no-repeat;
            background-position: center;
            background-size: cover;`
    }
  }
}
</script>

<style scoped>
.animeRoadmap {
  position: static;
  display: block;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 7s infinite alternate ease-in-out;
  animation-delay: 1s;
  width: 60%;
  height: 90%;
}
</style>
