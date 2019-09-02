
const state = {
  notifications: []
}

const getters = {}

const actions = {
  add({commit},notification){
    commit('PUSH',notification)
  },
  remove({commit},notificationToRemove){
    commit('DELETE',notificationToRemove)
  }
}

let nextId = 1

const mutations = {
  PUSH(state,notification){
    state.notifications.push({
      ...notification,
      id: nextId++
    })
  },
  DELETE(state, notificationToRemove){
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    )
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
