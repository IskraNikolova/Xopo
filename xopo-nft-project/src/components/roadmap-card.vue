<!--<template>
    <div @click="test()" class="my-card col-1">
      <q-card>
        <div class="card-content">
          <div class="text-title">{{ title1 }}</div>
          <div class="text-title">{{ title2 }}</div>
          <div class="text-primary index">{{ index }}</div>
        </div>
        <div class="card-background" :style="'background: url(' + img + ') no-repeat center center;background-size: cover;'"></div>
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
    title1: {
      type: String,
      required: true
    },
    title2: {
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
.card-content {
    position: absolute;
    z-index: 1;
    padding: 15px;
    color: white;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 12pt;
    border-radius: 15px!important;
}

.card-background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    border-radius: 15px!important;
    overflow: hidden;
}
.q-card {
    min-height: 160px;
    border-radius: 15px;
}
.card-background::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
    border-radius: 15px!important;
}
.my-card {
    border-radius: 15px!important;
}
</style>-->
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
