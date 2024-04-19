export const animePageModule = {
  namespaced: true,
  state: () => ({
  id: 0,
  data: null,
  included: null,
  }),
  getters: {
    getAnimeID(state) {
      return state.id;
  },
    getAnimeData(state) {
      return state.data;
  },
    getAnimeIncluded(state) {
      return state.included;
  },
  },

  mutations: {
    setAnimeID(state, response) {
      state.id = response;
    },
    setAnimeData(state, response) {
      state.data = response;
    },
    setAnimeIncluded(state, response) {
      state.included = response;
    },

  },
  actions: {
  
  },
};
