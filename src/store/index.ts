import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    path: <string[]>[]
  },
  mutations: {
    addPath(state, newPath) {
      state.count = state.path.push(newPath);

    },
    removePath(state, index) {
      // state.path.s
    }
  },
  actions: {

  },
  modules: {
  },
});
