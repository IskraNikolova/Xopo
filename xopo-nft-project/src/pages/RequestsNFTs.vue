<template>
    <q-page>
      <div
        class="q-mt-xl q-ml-md q-mr-md"
        style="display: flex;
        justify-content: center;
        flex-wrap: wrap">
        <div class="q-pa-md" style="max-width: 600px">
          <img src="~assets/xoro-site-top-banner_1.jpg" style="width: 550px;" class="q-mt-xs"/>
          <div class="text-h4 q-mb-md">Upload your artist information</div>
          Please complete the following form to provide the necessary contract information. This information will be used to create custom NFTs for you, so please be sure to provide accurate and complete details. The form includes fields for your ... and any other relevant information that may be required. Once you have submitted the form, we will review your application and contact you if further information is required.
          <br />
          Please note that completing this form does not guarantee that we will create nfts as the selection process depends on many criteria.
          <br />
          Thank you for your interest in our NFT program!
          <br />
          To help us understand your artistic style, please share links to at least three of your previous works that you would like to see as NFTs in our collection.
          <br />
          <br />
          <p class="text-warning"> * To indicate a mandatory question</p>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md q-mt-xl"
          >

          <div class="q-gutter-sm">
            <p>
              What type of artist are you?
            </p>
            <q-radio color="blue" :dark="appTheme=='dark'" v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="painting" label="Painting" />
            <q-radio color="blue" :dark="appTheme=='dark'" v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="music" label="Music" />
            <q-radio color="blue" :dark="appTheme=='dark'" v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="other" label="Other" />
          </div>
            <q-input
              class="q-pb-md"
              :dark="appTheme=='dark'"
              :label-color="color()"
              filled
              v-model="name"
              label="Your name *"
              hint="Name and surname or nickname"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
              :dark="appTheme=='dark'"
              :label-color="color()"
              filled
              type="number"
              v-model="age"
              label="Your age *"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please type your age',
                val => val >= 18 || 'Sorry, participation in this NFT project is restricted to individuals who are 18 years or older.',
                val => val > 0 && val < 100 || 'Please type a real age'
              ]"
            />
            <q-input
             :dark="appTheme=='dark'"
             :label-color="color()"
              filled
              type="email"
              v-model="email"
              placeholder="your-email@gmail.com"
              label="Email *"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
              class="q-pb-xl"
              :dark="appTheme=='dark'"
              :label-color="color()"
              filled
              v-model="linksToArt"
              placeholder="https://image1.com, https://image2.com, https://image3.com"
              label="URL's to view your artwork *"
              hint="Please enter three links (individual works, photos), separated by commas, so we can get an idea of what art you want to bring to life as an NFT."
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
              style="margin-bottom: 6%"
              :dark="appTheme=='dark'"
              :label-color="color()"
              filled
              type="url"
              v-model="instagram"
              placeholder="https://www.instagram.com/..."
              label="Instagram URL"
            />
            <q-input
              style="margin-bottom: 6%"
              :dark="appTheme=='dark'"
              :label-color="color()"
              filled
              type="url"
              v-model="twitter"
              placeholder="https://twitter.com/..."
              label="Twitter URL"
            />
            <q-input
              style="margin-bottom: 6%"
              :dark="appTheme=='dark'"
              :label-color="color()"
              filled
              type="url"
              v-model="socialLinks"
              label="Other website/social network links (add entire URLs)"
            />
            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
              <q-btn label="Submit" type="submit" color="blue" :dark="appTheme=='dark'"/>
              <q-btn label="Reset" type="reset" color="blue" flat class="q-ml-sm" :dark="appTheme=='dark'"/>
            </div>
          </q-form>
          <div class="q-mt-xl">
            <q-icon name="info" size="sm"/>
            If you encounter any difficulties or have questions regarding filling out your data, please don't hesitate to contact us via our Discord channel. Our agents will be happy to assist you and answer any inquiries you may have.
          </div>
          </div>
      </div>
    </q-page>
  </template>

<script>
import { ref } from 'vue'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'appTheme'
    ])
  },
  setup () {
    return {
      shape: ref('line')
    }
  },
  data () {
    return {
      name: '',
      age: null,
      email: '',
      instagram: '',
      twitter: '',
      website: '',
      linksToArt: [],
      socialLinks: '',
      accept: false
    }
  },
  methods: {
    color () {
      let color = 'white'
      if (this.appTheme !== 'dark') color = 'black'

      return color
    },
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },
    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>
