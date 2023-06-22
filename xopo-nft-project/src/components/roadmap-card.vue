<template>
    <div @click="test()" class="my-card col-1">
    <q-card>
        <img :src="img">

        <q-card-section style="min-height: 90px; position: relative;">
          <div class="text-title">{{ title }}</div>
          <div class="text-primary index"># {{ index }}</div>
        </q-card-section>
    </q-card>
</div>
</template>

<script>

export default {
  name: 'Roadmap-card',
  props: {
    index: {
      type: Number,
      required: true
    },
    title: {
      type: String,
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
    test () {
      console.log('hi')
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
    background-color: #4dbdb9;
    cursor: pointer;
    color: #4dbdb9;
  }
  .text-title {
    font-size: 100%;
    font-weight: bold;
  }
  .index{
    position: absolute;
    bottom: 0;
    padding-left: 50%;
    padding-bottom: 10%;
  }
</style>
