import Vue from 'vue';
import Vuex from 'vuex';
// @ts-ignore
import user from '@/store/modules/user.js'
// @ts-ignore
import event from '@/store/modules/event.js'
import registeruser from '@/store/modules/registeruser.js'
// @ts-ignore
import notification from '@/store/modules/notification.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    user,
    event,
    notification,
    registeruser
  },
  state: {
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
  }
});
