import * as types from '../types'

export default {
  [types.SET_USERINFO] (state, payload) {
    state.userInfo = payload
  },
  [types.SET_CURRENTBLOG] (state, payload) {
    state.currentBlog = payload
  }
}
