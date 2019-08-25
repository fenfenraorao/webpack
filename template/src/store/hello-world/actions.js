import { ADDCOUNT } from './mutation-types'

export default {
  [ADDCOUNT] ({commit}, count = 0) {
    commit(ADDCOUNT, count)
  }
}
