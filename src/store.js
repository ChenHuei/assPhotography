import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    user: {}
  },
  getters: {
    uid(state) {
      return state.user.uid;
    }
  },
  mutations: {
    SET_USER(state, obj) {
      state.user = obj;
    }
  },
  actions: {}
});
