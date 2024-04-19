import axios from "axios";
export const animeCategoryModule = {
  namespaced: true,
  state: () => ({
    categoriesAllArray: [],
    selectedCategories: [],
  }),
  getters: {
    getCategories(state) {
      return state.categoriesAllArray;
    },
    getSelectedCategories(state) {
      return state.selectedCategories.join(',');
    },
  },

  mutations: {
    setCategories(state, category) {
      state.categoriesAllArray = category;
    },
    setSelectedCategories(state, category) {
      state.selectedCategories = [category];
    },
    deleteSelectedCategories(state, category) {
      state.selectedCategories = state.selectedCategories.filter(item => item !== category);
    },
  },
  actions: {
    async getAnimeCategoriesArray({ commit, rootState }) {
      try {
        commit("setLoading", true, {root: true});
        const response = await axios({
          url: "https://kitsu.io/api/edge/categories",
          headers: rootState.axios.headers,
          params: {
            "page[limit]": rootState.pageLimitLoad,
            "page[offset]": rootState.countTitleOnPageOffset,
            "sort": "-total_media_count",
          },
        });
        commit("setCategories", response.data.data.map((element) => element.attributes.title)); // возвращаем названия жанров
      } catch (error) {
        console.error(error);
      } finally {
        commit("setLoading", false, {root: true});
      }
    },
  },
};
