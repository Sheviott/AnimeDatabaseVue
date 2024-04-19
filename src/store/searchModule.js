
export const searchModule = {
    namespaced: true,
    state: () => ({
        searchQuery: "",
        isLoadingInput: false,
    }),
    getters: {
        getSearchQuery(state) {
            return state.searchQuery;
        },
        getIsLoadingInput(state) {
            return state.isLoadingInput;
        }
    },
    
    mutations: {
        updateSearch(state, preload) {
            state.searchQuery = preload;
        },
        setIsLoadingInput(state, query) {
            state.isInput = query
        },
    },
    actions: {
    
    },
  };
  