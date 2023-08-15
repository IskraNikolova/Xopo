<template>
  <div class="col q-mr-sm q-ml-xs">
    <div><span :class="'' + className + ' animeM'"></span></div>
    <div class="text-bold text-uppercase">{{ name }}</div>
    <div class="text-bold">{{ title }}</div>
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  name: 'Roadmap-card',
  props: {
    className: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.animeM {
  width: 120px;
  height: 120px;
  margin-bottom: 22%;
  margin-top: 22%;
  margin-left: 32%;
}
.anime0m {
  position: static;
  display: block;
  background-image: url('./../assets/team/0.jpg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
  margin-bottom: 2%;
  margin-top: 5%;
  margin-left: 42%;
  filter: grayscale();
  filter: invert();
}
.anime1m {
  position: static;
  display: block;
  background-image: url('./../assets/team/r2.jpg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;

}
.anime2m {
  position: static;
  display: block;
  background-image: url('./../assets/team/r1.jpg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime3m {
  position: static;
  display: block;
  background-image: url('./../assets/team/i.jpg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime4m {
  position: static;
  display: block;
  background-image: url('./../assets/team/k.jpg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime5m {
  position: static;
  display: block;
  background-image: url('./../assets/team/v.jpg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime6m {
  position: static;
  display: block;
  background-image: url('./../assets/team/j.jpg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime7m {
  position: static;
  display: block;
  background-image: url('./../assets/team/d.jpg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime8m {
  position: static;
  display: block;
  background-image: url('./../assets/team/r1.jpg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
}
</style>
