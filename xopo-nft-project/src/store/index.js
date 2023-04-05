import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import app from './app'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => {
    const persistState = { ...state }
    delete persistState.app
    return persistState
  }
})

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      app
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    plugins: [vuexLocal.plugin],
    strict: process.env.DEV
  })

  return Store
}
