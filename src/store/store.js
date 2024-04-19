import { createStore } from "vuex";
import axios from "axios";
import { sortSelectModule } from '@/store/sortSelectModule'
import { animeCategoryModule } from '@/store/categoryModule'
import { searchModule } from '@/store/searchModule'
import { animePageModule } from '@/store/animePageModule'

export default createStore({
  state: () => ({
    anims: [],
    isAnimsLoading: false,
    toggleValue: false,
    // paginationModule
    paginanation: {},
    countTitleOnPageOffset: 0,
    pageLimitLoad: 16,
    limitTitleAll: 0,

    axios: {
      url: 'https://kitsu.io/api/edge/anime',
      headers: {
        'Accept': "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
    }
  }),
  getters: {
    getAllAnims(state) {
      return state.anims;
    },
    getIsAnimsLoading(state) {
      return state.isAnimsLoading;
    },
    getToggleValue(state) {
      return state.toggleValue;
    },
  },

  mutations: {
    setToggleValue(state, value) {
      state.toggleValue = value;
    },
    setAnims(state, response) {
      state.anims = response;
    },
    setLoading(state, bool) {
      state.isAnimsLoading = bool;
    },
    setCountTitleOnPageOffset(state, count) {
      state.countTitleOnPageOffset = count;
    },
    // paginationModule
    setPaginations(state, response) {
      state.paginanation = response;
    },
    setCountTitleOnPage(state, count) {
      state.countTitleOnPageOffset = count;
    },
    setLimitTitleAll(state, limit) {
      state.limitTitleAll = limit;
    },
  },
  actions: {
    async getAnimeDates({ state, commit, getters}) {
      try {
        commit("setLoading", true);
        let params = {
          "page[limit]": state.pageLimitLoad,
          "page[offset]": state.countTitleOnPageOffset,
          'sort': state.sort.selectedSort,
        };
        
        
        if(state.category.selectedCategories.length > 0) {
          params['filter[categories]'] = getters['category/getSelectedCategories']
        }
        if(state.search.searchQuery.length > 0) {
          params['filter[text]'] = getters['search/getSearchQuery']
        }
        
        const response = await axios({
          url: state.axios.url,
          headers: state.axios.headers,
          params: params,
        });

        // всего тайтлов в базе
        commit("setLimitTitleAll", response.data.meta.count);

        commit("setAnims", response.data.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getAnimeDatesLoadMore({ state, commit, getters }) {
      try {
        let params = {
          "page[limit]": state.pageLimitLoad,
          "page[offset]": state.countTitleOnPageOffset,
          'sort': state.sort.selectedSort,
        };
        if(state.category.selectedCategories.length > 0) {
          params['filter[categories]'] = getters['category/getSelectedCategories']
        }
        if(state.search.searchQuery.length > 0) {
          params['filter[text]'] = getters['search/getSearchQuery']
        }
        const response = await axios({
          url: state.axios.url,
          headers: state.axios.headers,
          params: params
        });
        commit("setAnims",  [...state.anims, ...response.data.data]);
      } catch (error) {
        console.error(error);
      }
    },
    async getAnimePageById({ state, commit}, id) {
      try {
        let params = {
          'fields[categories]': 'slug,title',
          'include': 'categories',
          'filter[id]': id.id,
        };
        
        commit("setLoading", true);
        const response = await axios({
          url: state.axios.url,
          headers: state.axios.headers,
          params: params
        });
        return response
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        commit("setLoading", false);
      }
    },
  },
  modules: {
    sort: sortSelectModule,
    category: animeCategoryModule,
    search: searchModule,
    title: animePageModule,
  },
});
