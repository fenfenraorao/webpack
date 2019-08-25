import Vuex from 'vuex'
import Vue from 'vue'
import helloWorld from './hello-world'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    helloWorld
  }
})
