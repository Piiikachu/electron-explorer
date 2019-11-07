import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


export interface PathContent {
  index: number;
  path: string;
}


export default new Vuex.Store({
  state: {
    paths: <PathContent[]>[],
    currentIndex: 0,
    pathIndex: 0
  },
  mutations: {
    addPath(state, newPath: string) {
      state.pathIndex += 1
      state.paths.push({
        index: state.pathIndex,
        path: newPath
      });
    },
    removePath(state, target: number) {
      let paths = state.paths;
      let current = state.currentIndex;
      if (current == target) {
        paths.forEach((p, index) => {
          if (p.index == target) {
            let nextP = paths[index + 1] || paths[index - 1]
            if (nextP) {
              current = nextP.index;
            }
          }
        });
      }
      state.currentIndex = current;
      state.paths = paths.filter(p => p.index != target);
    },
    changeCurrent(state, index: number) {
      if (index != state.currentIndex) {
        state.currentIndex = index;
      }
    }
  },
  actions: {

  },
  modules: {
  },
});

