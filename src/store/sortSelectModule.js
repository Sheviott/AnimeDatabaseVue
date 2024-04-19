export const sortSelectModule = {
  namespaced: true,
  state: () => ({
    selectedSort: "popularityRank",
    options: [
      { value: "popularityRank", title: "По популярности" },
      { value: "-startDate", title: "По дате выхода" },
      { value: "-averageRating", title: "По рейтингу" },
    ],
  }),
  getters: {
    getOptions(state) {
      return state.options;
    },
  },

  mutations: {
    updateSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
  },
  actions: {},
  modules: {},
};
