import { ADDCOUNT } from './mutations_types'

export default {
  [ADDCOUNT] ({commit}, count = 0) {
    commit(ADDCOUNT, count)
  }
}
