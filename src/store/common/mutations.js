import * as types from '../types'

export default {
  [types.SET_USERINFO] (state, payload) {
    state.userInfo = payload
  }
}
