<template>
 <q-page class="flex flex-center bodyt">
      <div  class="text-center text container">
      <div v-if="isFirst">
        <div class="text-princess text-h3" style="margin-left: auto;margin-right: auto; padding-top: 100px;">Join The</div>
        <q-img class="j-logo q-mb-sm" src="~assets/logos/horo_logo.svg" />
      </div>
      <q-img class="logo" src="~assets/logos/lp_bg.svg" />
      <q-layout @scroll="scrollHandler">
      <div v-if="isFirst">
        <p class="text-regular q-mb-xs first-p">
          We're crafting a worldwide platform for creatives of all kinds, with
        </p>
        <div
          class="text-montserrat-bold second-p"
        >
          <span class="nft-text">NFTs</span> as Our Canvas
        </div>
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
        <div class="q-mt-md q-mb-md">
          <span class="q-mr-xs"><q-img src="~assets/icons/media/discord_i.svg" class="media" /></span>
          <span class="q-mr-xs"><q-img src="~assets/icons/media/twiter_i.svg" class="media" /></span>
          <span class="q-mr-xs"><q-img src="~assets/icons/media/instagram_i.svg" class="media" /></span>
          <span class="q-mr-xs"><q-img src="~assets/icons/media/telegram_i.svg" class="media" /></span>
          <span class="q-mr-xs"><q-img src="~assets/icons/media/medium_i.svg"  class="media" /></span>
        </div>
        <div class="wrapAnime">
            <div class="row anime">
              <span class="anime1 background-image-fullsize"></span>
              <span class="anime2"></span>
              <span class="anime3 background-image-fullsize"></span>
              <span class="anime4 background-image-fullsize"></span>
              <span class="anime5"></span>
          </div>
        </div>
          <div class="first-text">
            <p class="title text-uppercase text-bold">Priceless Creations in the Digital Age </p>
            <p class="subTitle">Welcome to <span class="text-bold">"Join The Xopo"</span>, the Ultimate Platform for NFT Creation and Artistic Empowerment</p>
            <div class="row paragraph">
              <div class="col q-pl-xl"><p>In today's digital age, the world of art is constantly evolving. As an artist, it can be a challenge to break through the noise and gain recognition for your work. That's where <span class="text-bold">"Join The Xopo"</span> comes in - we're the ultimate platform for NFT creation, empowering artists to unlock the full potential of their masterpieces and take their creations to new heights.</p></div>
              <div class="col">Our team of NFT experts and talented artists work together to transform your artwork into non-fungible tokens, giving it a unique value and making it more accessible to a wider audience. But <span class="text-bold">"Join The Xopo"</span> is more than just a marketplace - it's a decentralized hub for artists, developers, and free speech enthusiasts. We're here to empower you, fuel your passion, and help you forge connections in the world of digital art.</div>
              <div class="col q-pr-xl">
                <p class="">With our expert guidance and unwavering support, you'll be able to convert your art into NFTs and redefine the way the world views and appreciates digital art. <span class="text-bold">So what are you waiting for?</span> Join the <span class="text-bold">"Join The Xopo"</span> movement today and unlock new realms of artistic expression. Welcome to the world of NFTs - welcome to <span class="text-bold">"Join The Xopo"</span></p>
                <a
                  tag="a"
                  href="https://medium.com/@XoroNft/how-to-become-a-wealthy-and-recognized-artist-in-todays-world-d207a36b8f2f"
                  target="_blank"
                  v-html="'read more...'"
                  class="text-info"
                ></a>
              </div>
            </div>
          </div>
          <div class="second-text">
            <div class="row paragraph" style="margin-top: 12%">
              <div class="col q-pl-xl">
                <p class="text-uppercase text-bold text-h5">Xopo's First Own Collection: "Koloda"</p>
                <p class="text-h6">Minted on Avalanche, our first NFT collection will feature 85 stunning paintings<span class="text-bold"> by Bulgarian artist Miroslav Mihov (Eternal Mirror)</span>. 'Koloda' - original works of art created between 2014 and 2022 using oil paints on canvas, watercolors, and chalk on cardboard.</p>
                <p>
                  This collection showcases a range of styles, from beautiful classical and abstract landscapes to vividly colored artworks and paintings with mysterious figurative and symbolic images. Each piece carries a substantial charge of natural, humane, aesthetic, and philosophical energy, making it a unique and captivating addition to any art collection.
                  As a testament to Xopo's commitment to artistic expression and innovation in the world of digital art, these artworks are available as NFTs.<span class="text-bold"> Don't miss your chance </span> to own a piece of this remarkable collection.
                </p>
              </div>
              <div class="col">
                <div class="row anime">
                  <span class="anime6 background-image-fullsize"></span>
                  <span class="anime7"></span>
                  <span class="anime8 background-image-fullsize"></span>
                  <span class="anime9 background-image-fullsize"></span>
                  <span class="anime10"></span>
                </div>
              </div>
            </div>
          </div>
          <p class="title text-uppercase text-bold">XOPO ROADMAP </p>
          <p class="subTitle">What is the Journey of XOPO?</p>
          <p class="subTitle">At our project, we envision a journey through <span class="text-bold"> ten foundational eras</span>, all humming with activity and evolving concurrently yet unfolding sequentially. Like strokes on a canvas, each era contributes to the grand tableau of our mission: to create a project that harnesses art to save the world.</p>
          <div class="row q-mt-xl">
            <div class="col-6 q-mt-md q-mr-xl q-ml-xl">
              <q-img src="~assets/roadmap/gifs/all4.gif" />
            </div>
            <div class="col-5 roadmap-paragraph q-mt-xs">
             We start with the <span class="text-bold text-h6">DaVinci Dawn</span>, a welcoming beacon to potential users, followed by the <span class="text-bold text-h6">Picasso Beta</span> that crafts our digital platform. The <span class="text-bold text-h6">Warhol Mint</span> users in the era of creation and commerce, setting the stage for <span class="text-bold text-h6">Hokusai Governance</span> to establish our project's guiding principles.

             <br /><br />With the <span class="text-bold text-h6">O'Keeffe Stake</span>, we invite users to become part of our vision, leading us to the <span class="text-bold text-h6">Michelangelo Airdrop</span>, a token of gratitude for our early adopters. The <span class="text-bold text-h6">Kahlo Portal</span> opens doors to artists worldwide, while the <span class="text-bold text-h6">Matisse Lottery</span> gives voice to our community, enabling them to shape the project.

             <br /><br />The <span class="text-bold text-h6">Van Gogh Integration</span> extends our reach, inviting more users to connect and engage.Finally, the <span class="text-bold text-h6">Kandinsky Legacy</span> solidifies our commitment to art and its causes, creating commemorative collections that resonate far beyond our platform.

              <br />Each era will be detailed upon arrival, painting a vivid picture of our journey so far. For now, we invite you to explore these concepts and join us in creating a project that does more than just exist - it lives, breathes, and thrives on art and passion. The number of eras is not definitive - after all, our journey is as dynamic as the art we aim to save.

              <br /><br />Welcome to our evolving masterpiece. Let's make the world our canvas!
            </div>
          </div>
          <roadmap />
          <div class="row justify-around">
          </div>
          <div>
            <q-img src="~assets/logos/lp_bg.svg" class="logo-footer" />
            <div class="footer-content">
              <q-img src="~assets/tokens/XOPO_3.gif" class="token-logo"/>
              <div class="q-pl-xl">
                <p class="text-uppercase text-bold text-h5">$XOPO, the native token of Xopo</p>
                <p class="text-h6">At Xopo, the $XOPO token plays a central role in fostering a community-driven ecosystem.</p>
                <p>
                  Our Decentralized Autonomous Organization (DAO), consisting of $XOPO token holders, plays a pivotal role in maintaining a vibrant and dynamic ecosystem where all participants have an equal say.In the DAO, collective decisions are made through a robust voting process. Once the voting is complete, the tokens used for voting are burned, symbolizing the consensus reached. Furthermore, each minted NFT generates both unique artwork and tokens, ensuring that the creative output and $XOPO tokens are intertwined.
                  These tokens serve as a powerful incentive, motivating and recognizing the contributions of our engaged community members. By holding $XOPO tokens, individuals have the opportunity to shape the destiny of Xopo while being rewarded for their active involvement.
                  Join us on this exhilarating journey, where $XOPO tokens empower artists, foster community engagement, and drive the future of NFT innovation. Together, we are building a platform that celebrates artistic expression and inclusivity, revolutionizing the way we appreciate and collect digital art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </q-layout>
    </div>
  </q-page>
</template>

<script>
import { scroll } from 'quasar'
import { mapGetters } from 'vuex'
import { xopo, joinTheXopo } from './../modules/constants'
const { getScrollTarget, setVerticalScrollPosition } = scroll

export default {
  name: 'PageIndex',
  components: {
    // TooltipStyle: () => import('components/tooltip-style.vue')
    // AnimatedNumber: () => import('animated-number-vue')
    Roadmap: () => import('components/roadmap.vue')
  },
  data () {
    return {
      xopo,
      joinTheXopo,
      isFirst: true,
      isSecond: false,
      scroll: 0,
      inerh: 0,
      lastScrollTop: 0,
      stepModel: 1,
      arrayMarkerLabel: [
        { value: 1, label: 'Step 1', toolText: 'Launch the welcome page to introduce the project to potential users.', text: 'WELCOME page' },
        { value: 2, label: 'Step 2', toolText: 'Develop the beta version of the dApp, which includes a form for artists to apply, user portfolios, and pages for each artist\'s collection and minting capabilities.', text: 'DApp’s (\'Join The Xopo\') beta version' },
        { value: 3, label: 'Step 3', toolText: 'Launch the welcome page to introduce the project to potential users.', text: '$XOPO Token & DAO: Community Governance & Rewards' },
        { value: 4, label: 'Step 4', toolText: 'Launch the welcome page to introduce the project to potential users.', text: 'WELCOME page ' },
        { value: 5, label: 'Step 5', toolText: 'Launch the welcome page to introduce the project to potential users.', text: 'WELCOME page' },
        { value: 6, label: 'Step 6', toolText: 'Launch the welcome page to introduce the project to potential users.', text: 'DApp’s (\'Join The Xopo\') beta version' },
        { value: 7, label: 'Step 7', toolText: 'Launch the welcome page to introduce the project to potential users.', text: '$XOPO Token & DAO: Community Governance & Rewards' },
        { value: 8, label: 'Step 8', toolText: 'Launch the welcome page to introduce the project to potential users.', text: 'WELCOME page ' }
      ]
    }
  },
  computed: {
    stepLabel () {
      return `${this.stepModel}. ${this.arrayMarkerLabel[this.stepModel - 1].text}`
    },
    ...mapGetters([
      'appTheme'
    ])
  },
  mounted () {
    this.xopo = xopo
    this.joinTheXopo = joinTheXopo
  },
  methods: {
    scrollHandler (event) {
      const {
        position,
        direction
        // directionChanged
      } = event
      const logo = document.querySelector('.logo')
      const text = document.querySelector('.text')
      // const fText = document.querySelector('.first-text')
      // const sText = document.querySelector('.second-text')
      // const tText = document.querySelector('.third-text')
      const anime = document.querySelector('.wrapAnime')
      const cards = document.querySelectorAll('.my-card')
      let index = 100
      cards.forEach(function (card) {
        const cardPosition = card.offsetTop
        if (position > cardPosition - window.innerHeight / 3.5) {
          card.classList.add(`animate-in-${index}`)
        } else {
          card.classList.remove(`animate-in-${index}`)
        }
        index += 20
      })

      if (direction === 'up') {
        if (position < 0) {
          text.classList.remove('show')
          logo.classList.remove('logo-small', 'logo-below')
          this.isFirst = true
          this.isSecond = false
        }
        if (position <= 650 && anime) {
          anime.classList.remove('show2')
          anime.classList.add('reverse')
        }
        // if (anime) {
        //   for (let i = 1; i <= 5; i++) {
        //     const el = anime.querySelector(`.anime${i}`)
        //     this.checkElementPosition(el)
        //   }
        // }
      } else {
        if (position > 1) {
          text.classList.add('show')
          logo.classList.add('logo-small', 'logo-below')
          this.isFirst = false
          this.isSecond = true
        }
        if (position >= 300 && anime) {
          anime.classList.add('show2')
          anime.classList.remove('reverse')
        }
      }

      logo.style.top = `${Math.min(75 + position * 0.2, window.innerHeight)}px`
      logo.style.opacity = `${Math.max(1 - position / window.innerHeight, 0)}`
    },
    checkElementPosition (element) {
      const rect = element.getBoundingClientRect()
      if (rect.bottom <= 0) {
        element.style.transform = 'translate(0, 0) scale(1)'
      } else {
        element.style.transform = ''
      }
    },
    scrollToElement (el, duration) {
      const target = getScrollTarget(el)
      const offset = el.offsetTop
      setVerticalScrollPosition(target, offset, duration)
    },
    test () {
      console.log('hi')
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
  color: #1f1f1e;
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
  transition: transform 1.5s, top 0.5s;
  z-index: -1;
}
.footer-content {
  position: fixed;
  right: auto;
  bottom: 100px;
}
.logo-footer {
  position: relative;
  margin-top: 8%;
  margin-left: -25%;
  width: 150%;
  height: 700px;
}
.token-logo {
  width: 15%;
}
.first-p,
.second-p,
.third-p,
.show .second-p,
.show .third-p {
  margin-top: 1%;
}
.show .first-p {
  padding-top: 4%;
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
.third-p {
  letter-spacing: .05rem;
}
.title {
  clear: both;
  text-align: center;
  margin-top: 10%;
  font-size: 23pt;
  letter-spacing: .05rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1%;
}
.subTitle {
  max-width: 50%;
  text-align: center;
  font-size: 15pt;
  margin-left: auto;
  margin-right: auto;
}
.paragraph {
  margin-top: 3%;
  display: flex;
  justify-content: center;
  gap: 70px;
  text-align: center;
  line-height: 2.2;
  font-size: medium;
}
.roadmap-paragraph {
  justify-content: center;
  gap: 70px;
  text-align: left;
  line-height: 2.2;
  font-size: medium;
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
  transform: translateZ(100px) scale(0.99);
  transition: transform 2s;
}
.show .logo {
  transition: transform 1.5s;
  transform: translateY(-100px) scale(0.01);
  left: 41.5%;
}
.show p {
  transform: translateZ(500px) scale(1);
  transition: transform 1s;
}
.show .animated-text {
  opacity: 1;
  transform: translateY(0);
}
.logo-below {
  position: absolute;
  z-index: -1;
}
.logo-small {
  width: 200px;
  height: 200px;
}

.show3 p {
  transform: translateZ(500px) scale(1);
  transition: transform 1s;
}
.animated-text {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s, transform 0.1s;
}
.animated-text2 {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.5s, transform 0.9s;
}
.show2 .animated-text2 {
  opacity: 1;
  transform: translateY(0);
}
.show3 .animated-text2 {
  opacity: 1;
  transform: translateY(0);
}
.j-logo {
  width: 45px;
}
.anime {
  width: 80%;
  margin-left: 5%;
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
  background-image: url('./../assets/animeImages/face3.png');
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
.anime6 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/face.png');
  animation: organic 12s infinite alternate ease-in-out;
}
.anime7 {
  position: static;
  display: block;
  background-color: #1f1f1e;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime8 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/kk3.png');
  animation: organic 12s infinite alternate ease-in-out;
}
.anime9 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/kk.png');
  background-size: auto;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime10 {
  position: static;
  display: block;
  background-color: #1f1f1e;
  animation: organic 12s infinite alternate ease-in-out;
}
.background-image-fullsize {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
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
    width: 31pt;
  }
  .anime1 {
    margin-top: -3%;
    width: 28%;
    height: 200pt;
    margin-left: auto;
    margin-right: auto;
  }
  .anime2 {
    margin-top: 12%;
    margin-left: -27%;
    width: 15%;
    height: 130pt;
  }
  .anime3 {
    margin-top: 2%;
    width: 22%;
    height: 200pt;

  }
  .anime4 {
    margin-top: -4%;
    width: 27%;
    height: 200pt;
  }
  .anime5 {
    margin-left: -10%;
    margin-top: -8%;
    width: 10%;
    height: 100pt;
  }
  .anime6 {
    margin-top: -3%;
    margin-left: 20%;
    width: 10%;
    height: 200pt;
    z-index: -1;
  }
  .anime7 {
    margin-top: 50%;
    width: 10%;
    height: 50pt;
    z-index: -1;
  }
  .anime8 {
    margin-top: 4%;
    margin-left: 15%;
    width: 15%;
    height: 280pt;
    z-index: 1;
  }
  .anime9 {
    margin-left: -55%;
    margin-top: 20%;
    width: 60%;
    height: 60pt;
    z-index: -1;
  }
  .anime10 {
    margin-top: -8%;
    width: 10%;
    height: 60pt;
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
    font-size: 17pt;
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  .show .first-p {
    font-size: 17pt;
    margin-top: -5%;
  }
  .show .second-p {
    font-size: 51pt;
  }
  .show .third-p {
    max-width: 50%;
    font-size: 22pt;
  }
  .show2 .anime > .anime1 {
    transition: transform 3s;
    transform: translate(620px, 980px) scale(0.4);
    z-index: -2;
  }
  .show2 .anime > .anime2 {
    transition: transform 3.2s;
    transform: translate(320px, 820px) scale(0.4);
  }
  .show2 .anime > .anime3 {
    transition: transform 4s;
    transform: translate(300px, 1110px) scale(0.5);
    z-index: -2;
  }
  .show2 .anime > .anime4 {
    transition: transform 4.5s;
    transform: translate(130px, 1000px) scale(0.4);
  }
  .show2 .anime > .anime5 {
    transition: transform 5.8s;
    transform: translate(-40px, 1300px) scale(0.3);
  }
  .reverse .anime > .anime1 {
    transition: transform 3s;
    transform: translate(0, 0) scale(1);
  }

  .reverse .anime > .anime2 {
    transition: transform 3.3s;
    transform: translate(0, 0) scale(1);
  }

  .reverse .anime > .anime3 {
    transition: transform 4s;
    transform: translate(0, 0) scale(1);
  }

  .reverse .anime > .anime4 {
    transition: transform 4.2s;
    transform: translate(0, 0) scale(1);
  }

  .reverse .anime > .anime5 {
    transition: transform 4.8s;
    transform: translate(0, 0) scale(1);
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
