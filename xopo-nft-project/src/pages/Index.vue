<template>
  <div class="q-mt-xl q-ml-md q-mr-md container">
    <div class="text-center text">
      <div class="text-princess text-h4">Join The</div>
      <div style="margin-bottom: 8%;">
        <img src="~assets/logos/horo_logo.svg" style="width: 45px;" />
      </div>
      <q-img class="logo" src="~assets/logos/lp_bg.svg" style="width: 43%;"/>
        <p class="text-regular" style="font-size: 10pt; margin-bottom: 1%;">We're crafting a worldwide platform for creatives of all kinds, with</p>
        <p class="text-montserrat-bold" style="font-size: 32pt; margin-bottom: 1%;"><span style="background-color: #1f1f1e;padding:5px;color:white;">NFTs</span> as Our Canvas</p>
        <p class="text-uppercase text-bold" style="font-size: 14pt;">Decentralized hub for artists, developers, and free speech enthusiasts.</p>
    </div>
    <!--<div class="row first-text" style="margin-bottom: 10%;margin-top: 5%;">
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
    <div class="row second-text" style="margin-bottom: 5%;">
      <div class="col-4">
        <p class="animated-text">image</p>
      </div>
      <div class="col-4 text-center"></div>
      <div class="col-4">
        <p class="animated-text">
          <span class="text-bold">{{ joinTheXopo.title }}</span>
          {{ joinTheXopo.content }}
        </p>
      </div>
    </div>
    <div class="row third-text">
      <div class="col-4">
        <p class="animated-text">
          <span class="text-bold">{{ xopoToken.title }}</span>
          {{ xopoToken.content }}
        </p>
      </div>
      <div class="col-4"></div>
      <div class="col-4">
        <p class="animated-text">image</p>
      </div>
    </div>-->
  </div>
</template>

<script>
import { xopo, joinTheXopo } from './../modules/constants'

export default {
  name: 'PageIndex',
  data () {
    return {
      xopo,
      joinTheXopo
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.handleScroll)
    this.xopo = xopo
    this.joinTheXopo = joinTheXopo
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // handleScroll () {
    //   const h1 = document.querySelector('.h1')
    //   const logo = document.querySelector('.logo')
    //   const text = document.querySelector('.text')
    //   const tText = document.querySelector('.third-text')
    //   const fText = document.querySelector('.first-text')
    //   const sText = document.querySelector('.second-text')
    //   const scrollY = window.scrollY
    //   const position = Math.min(10 + scrollY * 0.2, window.innerHeight)

    //   if (scrollY >= 570) {
    //     tText.classList.add('show4')
    //   } else if (scrollY > 520) {
    //     sText.classList.add('show3')
    //   } else if (scrollY > position) {
    //     fText.classList.add('show2')
    //   } else if (scrollY > 0) {
    //     text.classList.add('show')
    //     logo.classList.add('logo-small', 'logo-below')
    //   }

    //   if (scrollY <= 0) {
    //     h1.innerHTML = 'NFTs as our canvas'
    //     text.classList.remove('show')
    //     logo.classList.remove('logo-small', 'logo-below')
    //   } else if (scrollY <= position) {
    //     h1.innerHTML = '<span>NFTs as </span><span>&nbsp; &nbsp;<span>ur canvas</span>'
    //     fText.classList.remove('show2')
    //   } else if (scrollY <= 520) {
    //     sText.classList.remove('show3')
    //   } else if (scrollY <= 600) {
    //     tText.classList.remove('show4')
    //   }

    //   logo.style.top = `${position}px`
    //   logo.style.opacity = `${Math.max(1 - scrollY / window.innerHeight, 0)}`
    // }
  }
}
</script>

<style>
.logo {
  position: fixed;
  top: 20%;
  left: 42%;
  margin-left: -200px;
  transform: translateZ(-200px) scale(1.5);
  transition: transform 0.5s, top 0.5s;
  z-index: -1;
}

.text {
  position: relative;
  top: 50%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.show {
  transform: translateZ(-100px) scale(0.8);
}

.show .logo {
  transform: translateZ(-1000px) scale(0.5);
  top: 40%;
}

.show h1 {
  margin-bottom: 100px;
  transform: translateZ(300px) scale(2);
}

.show p {
  margin-bottom: 20px;
  transform: translateZ(500px) scale(2);
}

.logo-below {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) scale(0.5);
  z-index: -1;
}

.logo-small {
  width: 300px;
  height: 300px;
}

.animated-text {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s, transform 0.6s;
}

.first-text .logo {
  opacity: 0;
}

.show .animated-text {
  opacity: 1;
  transform: translateY(0);
}

.show2 .animated-text {
  opacity: 1;
  transform: translateY(0);
}

.show2 .logo {
  opacity: 1;
  transform: translateY(0);
}

.show2 .logo {
  opacity: 1;
  transform: translateY(0);
}

.show3 .animated-text {
  opacity: 1;
  transform: translateY(0);
}

.show4 .animated-text {
  opacity: 1;
  transform: translateY(0);
}

.container {
  margin-top: 3%;
}

</style>
