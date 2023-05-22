<template>
    <div class="q-mt-xl q-ml-md q-mr-md">
      <div class="text-center text">
        <q-img class="logo" src="~assets/XOPO_3.gif" />
        <div class="text-h1 q-mt-xl">$XOPO</div>
      </div>
      <div class="row first-text" style="margin-bottom: 10%;margin-top: 5%;">
        <div class="col-4">
          <p class="animated-text">
            <span class="text-bold">{{ xopo.title }}</span>
            {{ xopo.content }}
          </p>
        </div>
        <div class="col-4 text-center"></div>
        <div class="col-4">
          <p class="animated-text">image</p>
        </div>
      </div>
    </div>
  </template>

<script>
import { xopo } from './../modules/constants'

export default {
  name: 'PageXOPO',
  data () {
    return {
      xopo
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.xopo = xopo
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const logo = document.querySelector('.logo')
      const fText = document.querySelector('.first-text')
      const scrollY = window.scrollY
      const position = Math.min(10 + scrollY * 0.2, window.innerHeight)

      if (scrollY > position) {
        fText.classList.add('show2')
      } else {
        fText.classList.remove('show2')
      }

      logo.style.top = `${position}px`
      logo.style.opacity = `${Math.max(1 - scrollY / window.innerHeight, 0)}`
    }
  }
}
</script>

<style>
.logo {
    width: 300px;
    height: 300px;
    transition: transform 0.5s, top 0.5s;
    z-index: -1;
}

.animated-text {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s, transform 0.6s;
}

.first-text .logo {
    opacity: 0;
}

.show2 .animated-text {
    opacity: 1;
    transform: translateY(0);
}

.show2 .logo {
    transform: translateY(0);
}

</style>
