import EventService from '@/services/EventService.ts'

const state = {
  user: null
}

const mutations = {
  SET_USER_DATA (state, userData) {
    state.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
  }
}

const actions = {
  register ({ commit }, credentials) {
    return EventService.registerUser(credentials)
      .then(({ data }) => {
        console.log('user data is', userData)
        commit('SET_USER_DATA', data)
      })
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
