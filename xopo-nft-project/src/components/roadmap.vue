<template>
  <div class="q-pa-md cards row items-start q-gutter-md">
    <div @click="test()" class="my-card col-2 q-ml-xl">
        <q-card>
        <img src="~assets/roadmap/1.png">

        <q-card-section>
        <div class="text-h6">DaVinci Dawn</div>
        <div class="text-subtitle2"> Welcome <span class="text-primary text-h4">#1</span></div>
        </q-card-section>
        </q-card>
    </div>
    <q-card class="my-card col-2 q-ml-xl">
        <img src="~assets/roadmap/2.png">

        <q-card-section>
        <div class="text-h6">Picasso Beta</div>
        <div class="text-subtitle2"> DApp Beta <span class="text-primary text-h4">#2</span></div>
        </q-card-section>
    </q-card>
    <q-card class="my-card col-2 q-ml-xl">
        <img src="~assets/roadmap/3.png">

        <q-card-section>
        <div class="text-h6">Warhol Bazaar</div>
        <div class="text-subtitle2">Marketplace <span class="text-primary text-h4">#3</span></div>
        </q-card-section>
    </q-card>
    <q-card class="my-card col-2 q-ml-xl">
        <img src="~assets/roadmap/4.png">

        <q-card-section>
        <div class="text-h6">Hokusai Governance</div>
        <div class="text-subtitle2">Token and DAO <span class="text-primary text-h4">#4</span></div>
        </q-card-section>
    </q-card>
    <q-card class="my-card col-2 q-ml-xl">
        <img src="~assets/roadmap/5.png">

        <q-card-section>
        <div class="text-h6">O'Keeffe Stake</div>
        <div class="text-subtitle2"> Staking and Mining <span class="text-primary text-h4">#5</span></div>
        </q-card-section>
    </q-card>
    <q-card class="my-card col-2 q-ml-xl">
        <img src="~assets/roadmap/6.png">

        <q-card-section>
        <div class="text-h6">Michelangelo Airdrop</div>
        <div class="text-subtitle2"> Airdrop <span class="text-primary text-h4">#6</span></div>
        </q-card-section>
    </q-card>
    <q-card class="my-card col-2 q-ml-xl">
        <img src="~assets/roadmap/8.png">

        <q-card-section>
        <div class="text-h6">Kahlo Portal</div>
        <div class="text-subtitle2"> Artist Portal <span class="text-primary text-h4">#7</span></div>
        </q-card-section>
    </q-card>
    <q-card class="my-card col-2 q-ml-xl">
        <img src="~assets/roadmap/9.png">

        <q-card-section>
        <div class="text-h6">Matisse Lottery</div>
        <div class="text-subtitle2">Voting and Raffle <span class="text-primary text-h4">#8</span></div>
        </q-card-section>
    </q-card>
    <q-card class="my-card col-2 q-ml-xl">
        <img src="~assets/roadmap/10.png">

        <q-card-section>
        <div class="text-h6">Van Gogh Integration</div>
        <div class="text-subtitle2">Integration <span class="text-primary text-h4">#9</span></div>
        </q-card-section>
    </q-card>
    <q-card class="my-card col-2 q-ml-xl">
        <img src="~assets/roadmap/11.png">

        <q-card-section>
        <div class="text-h6">Kandinsky Legacy</div>
        <div class="text-subtitle2"> Sponsorship and Commemoration: <span class="text-red">#10</span></div>
        </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Roadmap',
  computed: {
    ...mapGetters([
      'appTheme'
    ])
  }
}
</script>
<style>
.animate-in-100 {
    transform: rotate(100deg);
  }
  .animate-in-120 {
    transform: rotate(120deg);
  }
  .animate-in-140 {
    transform: rotate(140deg);
  }
  .animate-in-160 {
    transform: rotate(160deg);
  }
  .animate-in-180 {
    transform: rotate(180deg);
  }
  .animate-in-200 {
    transform: rotate(200deg);
  }
  .animate-in-220 {
    transform: rotate(220deg);
  }
  .animate-in-240 {
    transform: rotate(240deg);
  }
  .animate-in-260 {
    transform: rotate(260deg);
  }
  .animate-in-280 {
    transform: rotate(280deg);
  }
  .cards {
    margin-top: 5%;
  }
  .my-card {
    width: 100%;
    max-width: 350px;
    min-height: 350px;
    transition: transform 1s;
  }
  .my-card:hover {
    background-color: aqua;
    cursor: pointer;
  }
</style>
