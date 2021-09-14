import * as types from '../types'
export default {
  setCurrentBlog ({ commit }, params) {
    commit(types.SET_CURRENTBLOG, params)
  }
}
