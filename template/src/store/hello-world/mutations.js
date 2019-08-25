import { ADDCOUNT } from './mutation-types'

export default {
  [ADDCOUNT] (state,count) {
    state.count = count
  }
}
