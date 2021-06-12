import { top20 } from '../../api'
const state = {
  topList: {},
}

const mutations = {
  setTopList (state, list) {
    state.topList = list
  }
}

const actions = {
  getTopList (store) {
    return top20().then((res) => {
      store.commit('setTopList', res.data.subjects)
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}