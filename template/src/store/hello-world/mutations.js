import { ADDCOUNT } from './mutations_types'

export default {
  [ADDCOUNT] (state,count) {
    state.count = count
  }
}
