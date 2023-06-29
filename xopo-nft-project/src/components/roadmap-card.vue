<template>
  <div @click="goTo(index)" class="my-card col-1"
    @mouseover="hovering = true" @mouseleave="hovering = false">
    <q-card :style="hovering ? {'background': 'linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(' + img + ') no-repeat center center','background-size': 'cover', 'color': 'white'} : {}">
      <img :src="img" :style="hovering ? {'opacity': '0'} : {}" />

      <q-card-section style="min-height: 90px; position: relative;">
        <div class="text-title">{{ getTitle1() }}<br/> {{ getTitle2() }}</div>
        <div class="text-primary index"># {{ index }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hovering: false
    }
  },
  name: 'Roadmap-card',
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  },
  setup () {
    return {
    }
  },
  methods: {
    goTo (i) {
      this.$router.push({ path: `${i}` })
    },
    // todo ...compound...
    getTitle1 () {
      if (!this.item) return
      const titles = this.item.title.split(' ')
      return titles[0]
    },
    getTitle2 () {
      if (!this.item) return
      const titles = this.item.title.split(' ')
      return titles[1]
    }
  }
}
</script>

<style scoped>
  .cards {
    margin-top: 5%;
  }
  .my-card {
    transition: transform 1s;
  }
  .my-card:hover {
    cursor: pointer;
  }
  .text-title {
    font-size: 100%;
    font-weight: bold;
    text-align: center;
  }
  .index{
    position: absolute;
    bottom: 0;
    padding-left: 25%;
    padding-bottom: 10%;
  }
</style>
