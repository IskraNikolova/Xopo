<template>
  <div>
    <!--<div class="text-center text">
      <div class="text-princess text-h3" style="padding-top: 8%;">Join The</div>
      <div style="margin-bottom: 3%;">
        <img src="~assets/logos/horo_logo.svg" style="width: 45px;" />
      </div>
      <q-img class="logo" src="~assets/logos/lp_bg.svg" style="width: 50%;margin-top: -10%;"/>
      <p class="text-regular" style="font-size: 13pt; margin-bottom: 1%;">We're crafting a worldwide platform for creatives of all kinds, with</p>
      <p class="text-montserrat-bold" style="font-size: 42pt; margin-bottom: 1%;"><span style="background-color: #1f1f1e;padding:5px;color:white;">NFTs</span> as Our Canvas</p>
      <p class="text-uppercase text-bold text3" style="font-size: 18pt;">Decentralized hub for artists, developers, and free speech enthusiasts.</p>
      <q-img src="~assets/icons/mouse.svg" style="width: 2%;margin-top: 8%;"/>
    </div>-->
    <div class="text2 absolute-top absolute-center">
      <p class="text-regular text-center" style="font-size: 13pt; margin-bottom: 1%;">We're crafting a worldwide platform for creatives of all kinds, with</p>
      <div class="text-montserrat-bold text-center" style="font-size: 42pt; margin-bottom: 1%;">
        <span style="background-color: #1f1f1e; padding: 5px; color: white;">NFTs</span> as <img src="~assets/logos/three_logo.svg" style="width: 13%; vertical-align: middle; margin-bottom: 7px;" />ur Canvas
      </div>
      <p class="text-uppercase text-bold text3 text-center" style="font-size: 18pt;">Decentralized hub for artists, developers, and free speech enthusiasts.</p>
      <div class="text-center q-mb-xl">
        <span class="q-mr-xs"><q-img src="~assets/icons/media/discord_i.svg" style="width: 20pt;" /></span>
        <span class="q-mr-xs"><q-img src="~assets/icons/media/twiter_i.svg" style="width: 20pt;" /></span>
        <span class="q-mr-xs"><q-img src="~assets/icons/media/instagram_i.svg" style="width: 20pt;" /></span>
        <span class="q-mr-xs"><q-img src="~assets/icons/media/telegram_i.svg" style="width: 20pt;" /></span>
        <span class="q-mr-xs"><q-img src="~assets/icons/media/medium_i.svg" style="width: 20pt;" /></span>
      </div>
      <div style="position: relative;min-width: 180%;margin-top: 1%;margin-left: 70%;">
        <span class="anime"></span>
        <span class="anime2"></span>
        <span class="anime3"></span>
        <span class="anime4"></span>
        <span class="anime5"></span>
      </div>
    </div>
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
    handleScroll () {
      // const h1 = document.querySelector('.h1')
      // const logo = document.querySelector('.logo')
      // const text = document.querySelector('.text')
      // const tText = document.querySelector('.third-text')
      // const fText = document.querySelector('.first-text')
      // const sText = document.querySelector('.second-text')
      // const scrollY = window.scrollY
      // const position = Math.min(10 + scrollY * 0.2, window.innerHeight)

      // if (scrollY >= 570) {
      //   tText.classList.add('show4')
      // } else if (scrollY > 520) {
      //   sText.classList.add('show3')
      // } else if (scrollY > position) {
      //   fText.classList.add('show2')
      // } else if (scrollY > 0) {
      //   text.classList.add('show')
      //   logo.classList.add('logo-small', 'logo-below')
      // }

      // if (scrollY <= 0) {
      //   h1.innerHTML = 'NFTs as our canvas'
      //   text.classList.remove('show')
      //   logo.classList.remove('logo-small', 'logo-below')
      // } else if (scrollY <= position) {
      //   h1.innerHTML = '<span>NFTs as </span><span>&nbsp; &nbsp;<span>ur canvas</span>'
      //   fText.classList.remove('show2')
      // } else if (scrollY <= 520) {
      //   sText.classList.remove('show3')
      // } else if (scrollY <= 600) {
      //   tText.classList.remove('show4')
      // }

      // logo.style.top = `${position}px`
      // logo.style.opacity = `${Math.max(1 - scrollY / window.innerHeight, 0)}`
    }
  }
}
</script>

<style>
.logo {
  position: fixed;
  top: 20%;
  left: 38%;
  margin-left: -200px;
  transform: translateZ(-200px) scale(1.5);
  transition: transform 0.5s, top 0.5s;
  z-index: -1;
}

.text {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.text3 {
  max-width: 600px;
  margin: 0 auto;
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

.anime {
  position: absolute;
  top: -8%;
  left: 0%;
  display: block;
  width: 18%;
  height: 150pt;
  background-image: url('./../assets/animeImages/65.png');
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime2 {
  position: absolute;
  top: 0%;
  left: 10%;
  display: block;
  width: 10%;
  height: 100pt;
  background-color: #1f1f1e;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime3 {
  position: absolute;
  top: -1%;
  left: 20%;
  display: block;
  width: 16%;
  height: 160pt;
  background-image: url('./../assets/animeImages/1.png');
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime4 {
  position: absolute;
  top: -5%;
  left: 36%;
  display: block;
  width: 20%;
  height: 200pt;
  background-image: url('./../assets/animeImages/2.png');
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime5 {
  position: absolute;
  top: -5%;
  left: 48%;
  display: block;
  width: 10%;
  height: 100pt;
  background-color: #1f1f1e;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
}

@keyframes organic {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }

  25% {
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }

  50% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }

  100% {
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }
}
  .text2 {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   height: 100%;
   margin-top: 5%;
 }
</style>
