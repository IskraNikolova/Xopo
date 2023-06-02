<template>
  <q-page class="flex flex-center bodyt">
    <div class="text-center text container">
      <div v-if="isFirst">
        <div class="text-princess text-h3">Join The</div>
        <q-img class="j-logo q-mb-md" src="~assets/logos/horo_logo.svg" />
      </div>
      <q-img class="logo" src="~assets/logos/lp_bg.svg" />
      <div v-if="isFirst">
        <p class="text-regular q-mb-xs first-p">
          We're crafting a worldwide platform for creatives of all kinds, with
        </p>
        <p class="text-montserrat-bold q-mb-xs second-p">
          <span class="nft-text">NFTs</span> as Our Canvas
        </p>
        <p class="text-uppercase text-bold third-p">
          Decentralized hub for artists, developers, and free speech enthusiasts.
        </p>
        <q-img src="~assets/icons/mouse.svg" class="mouse" />
      </div>
      <div v-else>
        <p class="text-regular first-p">
          We're crafting a worldwide platform for creatives of all kinds, with
        </p>
        <div
          class="text-montserrat-bold second-p"
        >
          <span class="nft-text">NFTs</span> as <img src="~assets/logos/three_logo.svg" class="small-logo q-mb-sm" />ur Canvas
        </div>
        <p
          class="text-uppercase text-bold third-p">
          Decentralized hub for artists, developers, and free speech enthusiasts.
        </p>
        <div class="q-mt-xl q-mb-md">
          <span class="q-mr-xs"><q-img src="~assets/icons/media/discord_i.svg" class="media" /></span>
          <span class="q-mr-xs"><q-img src="~assets/icons/media/twiter_i.svg" class="media" /></span>
          <span class="q-mr-xs"><q-img src="~assets/icons/media/instagram_i.svg" class="media" /></span>
          <span class="q-mr-xs"><q-img src="~assets/icons/media/telegram_i.svg" class="media" /></span>
          <span class="q-mr-xs"><q-img src="~assets/icons/media/medium_i.svg"  class="media" /></span>
        </div>
        <div class="row anime">
          <span class="anime1"></span>
          <span class="anime2"></span>
          <span class="anime3"></span>
          <span class="anime4"></span>
          <span class="anime5"></span>
        </div>
        <!--<div class="title">Redefining the Value of Art: Priceless Creations in the Digital Age </div>-->
      </div>
    </div>
  </q-page>
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
      joinTheXopo,
      isFirst: true,
      isSecond: false,
      isThird: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.xopo = xopo
    this.joinTheXopo = joinTheXopo
  },
  methods: {
    handleScroll () {
      const logo = document.querySelector('.logo')
      const text = document.querySelector('.text')
      // const tText = document.querySelector('.third-text')
      // const fText = document.querySelector('.first-text')
      // const sText = document.querySelector('.second-text')
      const scrollY = window.scrollY
      const position = Math.min(10 + scrollY * 0.2, window.innerHeight)

      // if (scrollY >= 570) {
      //   tText.classList.add('show4')
      // } else if (scrollY > 520) {
      //   sText.classList.add('show3')
      // } else if (scrollY > position) {
      //   fText.classList.add('show2')
      // } else
      if (scrollY > 100) {
        this.isThird = true
      } else if (scrollY > 10) {
        this.isSecond = true
      } else if (scrollY > 0) {
        text.classList.add('show')
        logo.classList.add('logo-small', 'logo-below')
        this.isFirst = false
      }

      if (scrollY <= 0) {
        text.classList.remove('show')
        logo.classList.remove('logo-small', 'logo-below')
        this.isFirst = true
        this.isSecond = false
      }
      // } else if (scrollY <= position) {
      //   fText.classList.remove('show2')
      // } else if (scrollY <= 520) {
      //   sText.classList.remove('show3')
      // } else if (scrollY <= 600) {
      //   tText.classList.remove('show4')
      // }

      logo.style.top = `${position}px`
      logo.style.opacity = `${Math.max(1 - scrollY / window.innerHeight, 0)}`
    },
    beforeDestroy () {
      // Remove scroll event listener when component is destroyed
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
</script>

<style>
.bodyt {
  display: flex;
  justify-content: center;
  align-items: center;
}
.media {
  width: 20pt;
}
.container {
  max-width: 100%;
  padding: 0 20px;
  text-align: center;
}
.logo {
  position: fixed;
  top: 20%;
  left: 25%;
  width: 50%;
  transform: translateZ(-200px) scale(3.5);
  transition: transform 0.5s, top 0.5s;
  z-index: -1;
}
.first-p,
.second-p,
.third-p,
.show .second-p,
.show .third-p {
  margin-top: 1%;
}

.small-logo {
  width: 20px;
  margin-bottom: 10px;
  width: 80pt;
  vertical-align: middle;
}
.text {
  position: relative;
  top: 5%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}
.title {
  clear: both;
  max-width: 30%;
}
.mouse {
  width: 20pt;
  margin-top: 8%;
}
.nft-text {
  background-color: #1f1f1e;
  padding: 4px;
  color: white;
}
.show {
  transform: translateZ(100px) scale(0.93);
  transition: transform 1s;
}
.show .logo {
  transition: transform 1s;
  transform: translateZ(-100px) scale(0.01);
  left: 37%;
}
.show p {
  transform: translateZ(500px) scale(1);
  transition: transform 1s;
}
.logo-below {
  position: absolute;
  z-index: -1;
}
.logo-small {
  width: 200px;
  height: 200px;
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
.j-logo {
  width: 45px;
}
.anime1 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/65.png');
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime2 {
  position: static;
  display: block;
  background-color: #1f1f1e;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime3 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/newGold.gif');
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime4 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/color24.png');
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime5 {
  position: static;
  display: block;
  background-color: #1f1f1e;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
}
.text-center {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
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

/* Styles for screens with a width between 375px and 414px and a height between 667px and 896px */
@media (min-width: 375px) and (max-width: 414px),
       (min-height: 667px) and (max-height: 896px) {
  .first-p {
    font-size: 7pt;
  }
  .second-p {
    font-size: 21pt;
  }
  .third-p {
    font-size: 11pt;
  }
  .show .first-p {
    font-size: 10pt;
  }
  .show .second-p {
    font-size: 30pt;
  }
  .show .third-p {
    font-size: 12pt;
  }
  .show .small-logo {
    width: 70px;
  }
  .anime1 {
    width: 100px;
    height: 110px;
    margin-top: -4%;
  }
  .anime2 {
    width: 40px;
    height: 60px;
    margin-left: -8%;
    margin-top: 12%;
  }
  .anime3 {
    width: 110px;
    height: 100px;
    margin-top: 1%;
  }
  .anime4 {
    width: 70px;
    height: 90px;
    margin-top: -3%;
  }
  .anime5 {
    width: 40px;
    height: 50px;
    margin-top: -8%;
    margin-left: -12%;
  }
}
/* Styles for screens with a width 390px  */
@media (min-width: 390px) and (max-width: 390px){
  .show .first-p {
    font-size: 11pt;
  }
  .first-p {
    font-size: 7pt;
  }
  .third-p {
    font-size: 12pt;
  }
}
/* Styles for screens with a width 412px and a height 896px */
@media (min-width: 412px) and (min-height: 896px) {
  .first-p {
    font-size: 7pt;
  }
  .third-p {
    font-size: 8.4pt;
  }
  .show .first-p {
    font-size: 11pt;
  }
  .show .second-p {
    font-size: 35pt;
  }
  .show .third-p {
    font-size: 12pt;
  }
  .anime {
    margin-top: 2%;
  }
  .anime1 {
    width: 90px;
    height: 100px;
  }
  .anime2 {
    width: 50px;
    height: 60px;
    margin-left: -8%;
    margin-top: 12%;
  }
  .anime3 {
    width: 120px;
    height: 110px;
    margin-top: 1%;
  }
  .anime4 {
    width: 100px;
    height: 100px;
    margin-top: -3%;
  }
  .anime5 {
    width: 40px;
    height: 60px;
    margin-top: -8%;
    margin-left: -12%;
  }
}

/* Styles for screens with a width between 540px and 1280px and a height between 720px and 800px */
@media (min-width: 540px) and (max-width: 1280px),
       (min-height: 720px) and (max-height: 800px) {
  .first-p {
    font-size: 10pt;
  }
  .second-p {
    font-size: 29pt;
  }
  .third-p {
    font-size: 14pt;
  }
  .show .small-logo {
    width: 80px;
  }
  .show .first-p {
    font-size: 11pt;
  }
  .show .second-p {
    font-size:32pt;
  }
  .show .third-p {
    font-size: 13pt;
  }
  .anime1 {
    width: 140px;
    height: 130px;
    margin-top: -4%;
  }
  .anime2 {
    width: 80px;
    height: 100px;
    margin-left: -9%;
    margin-top: 12%;
  }
  .anime3 {
    width: 150px;
    height: 130px;
    margin-top: 1%;
  }
  .anime4 {
    width: 130px;
    height: 120px;
    margin-top: -3%;
  }
  .anime5 {
    width: 40px;
    height: 70px;
    margin-top: -8%;
    margin-left: -8%;
  }
}

/* Styles for screens with a width between 768pxpx and a height 1024px */
@media (min-width: 768px) and (max-height: 1024px) {
  .first-p {
    font-size: 14pt;
  }
  .second-p {
    font-size: 43pt;
  }
  .third-p {
    font-size: 18pt;
  }
  .show .second-p {
    font-size: 42pt;
  }
  .show .small-logo {
    width: 75px;
  }
  .show .first-p {
    font-size: 14pt;
  }
  .show .third-p {
    font-size: 18pt;
  }
  .anime1 {
  width: 220px;
  height: 180px;
  margin-top: -3%;
  }
  .anime2 {
  width: 100px;
  height: 100px;
  margin-left: -10%;
  margin-top: 13%;
  }
  .anime3 {
    width: 190px;
    height: 180px;
    margin-top: 2%;
    margin-left: 0.5%;
  }
  .anime4 {
    width: 210px;
    height: 230px;
    margin-top: -6%;
  }
  .anime5 {
    width: 90px;
    height: 90px;
    margin-top: -10%;
  }
  .media {
    width: 30pt;
  }
}

/* Styles for screens with a width between 820px and 912px and a height between 1180px and 136px */
@media (min-width: 820px) and (max-width: 912px),
       (min-height: 1180px) and (max-height: 1368px) {
    .first-p {
      font-size: 16.5pt;
    }
    .second-p {
      font-size: 50pt;
    }
    .third-p {
      font-size: 21pt;
    }
    .media {
      width: 30pt;
    }
    .show .first-p {
      font-size: 17pt;
    }
    .show .second-p {
      font-size: 50pt;
    }
    .show .third-p {
      font-size: 20pt;
    }
    .anime1 {
      width: 220px;
      height: 180px;
      margin-top: -3%;
    }
    .anime2 {
      width: 100px;
      height: 100px;
      margin-left: -10%;
      margin-top: 13%;
    }
    .anime3 {
      width: 240px;
      height: 200px;
      margin-top: 2%;
      margin-left: 0.5%;
    }
    .anime4 {
      width: 220px;
      height: 230px;
    }
    .anime5 {
      width: 90px;
      height: 90px;
      margin-top: -6%;
    }
}
/* Styles for screens with a width of 1000px and a height of 1200px */
@media (min-width: 1000px) {
  .media {
    width: 20pt;
  }
  .anime1 {
    margin-left: 10%;
    margin-top: -3%;
    width: 21%;
    height: 150pt;
  }
  .anime2 {
    margin-top: 7%;
    width: 10%;
    height: 100pt;
  }
  .anime3 {
    margin-top: 2%;
    width: 32%;
    height: 180pt;
  }
  .anime4 {
    margin-top: -6%;
    width: 26%;
    height: 170pt;
  }
  .anime5 {
    margin-left: -7%;
    margin-top: -3%;
    width: 10%;
    height: 80pt;
  }
  .first-p {
    font-size: 13pt;
    margin-right: auto;
    margin-left: auto;
  }
  .second-p {
    font-size: 41pt;
  }
  .third-p {
    font-size: 20pt;
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  .show .first-p {
    font-size: 14pt;
  }
  .show .second-p {
    font-size: 41pt;
  }
  .show .third-p {
    font-size: 22pt;
  }
}
/* Styles for screens with a width 360px */
@media (min-width: 360px) and (max-width: 360px) {
  .media {
    width: 15pt;
  }
  .first-p {
    font-size: 6.9pt;
  }
  .second-p {
    font-size: 20pt;
  }
  .third-p {
    font-size: 11pt;
  }
  .show .first-p {
    font-size: 7pt;
  }
  .show .second-p {
    font-size: 30pt;
  }
  .show .small-logo {
    width: 55px;
  }
  .show .third-p {
    font-size: 12pt;
  }
  .anime1 {
    width: 90px;
    height: 100px;
  }
  .anime2 {
    width: 40px;
    height: 60px;
    margin-left: -8%;
    margin-top: 12%;
  }
  .anime3 {
    width: 100px;
    height: 110px;
    margin-top: 1%;
  }
  .anime4 {
    width: 70px;
    height: 100px;
    margin-top: -3%;
  }
  .anime5 {
    width: 40px;
    height: 60px;
    margin-top: -8%;
    margin-left: -12%;
  }
}
/* Styles for screens with a 280px*/
@media (min-width: 280px) and (max-width: 280px){
  .media {
    width: 15pt;
  }
  .first-p {
    font-size: 5pt;
  }
  .second-p {
    font-size: 14.5pt;
  }
  .third-p {
    font-size: 8pt;
  }
  .show .first-p {
    font-size: 8pt;
  }
  .show .second-p {
    font-size: 30pt;
  }
  .show .third-p {
    font-size: 8pt;
  }
  .show .small-logo {
    width: 60px;
  }
  .anime1 {
    width: 70px;
    height: 80px;
    margin-top: -5%;
    margin-left: -8%;
    }
  .anime2 {
    width: 40px;
    height: 30px;
    margin-left: -12%;
    margin-top: 12%;
  }
  .anime3 {
    width: 70px;
    height: 70px;
    margin-top: 1%;
  }
  .anime4 {
    width: 60px;
    height: 70px;
    margin-top: -3%;
  }
  .anime5 {
    width: 20px;
    height: 30px;
    margin-top: -8%;
    margin-left: -12%;
  }
}

</style>
