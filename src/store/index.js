import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import common from './common'
import blog from './blog'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    blog
  },
  strict: false
})
