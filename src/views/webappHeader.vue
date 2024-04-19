<template>
  <header class="header">
    <div class="header__body">
    
      <nav class="header__menu">
        <ul class="header__list">
          <li class="header__item">
            <RouterLink to="/">
              <p href="" class="header__link">Home</p>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
 
  data() {
    return {};
  },
  computed: {
    ...mapState({
      searchQuery: {
        get() {
          return this.$store.state.search.searchQuery;
        },
        set(value) {
          this.$store.commit("search/updateSearch", value);
        },
      },
    }),
  },
  methods: {
    updateSearch(e) {
      this.$store.commit("search/updateSearch", e.target.value);
      this.$store.commit("search/setIsInpiut", true);
    },
    Searching() {
    this.$store.dispatch('getAnimeDates')  
    }
  },
};
</script>
<style lang="scss" scoped>
.header {
  padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;


  &__body {
    display: flex;
    gap: 20px;
    align-items: end;
    justify-content: end;
  }

  &__logo {
    max-width: 60px;
  }

  &__list {
    display: flex;
    gap: 15px;
  }

  &__link {
    font-size: 18px;
    font-weight: 500;
    padding: 10px;
    border-radius: 10px;
    text-decoration: none;
    font-family: "Tilt Neon", sans-serif;
    padding: 10px;
    text-transform: uppercase;
    border-radius: 10px;
    color: white;
    text-shadow: #e07aad 0px 0px 5px, #FF2D95 0px 0px 10px, 0px 0px 10px rgba(255,28,189,0.43);
  }
  .input-search {
    padding: 8px;
    border-radius: 7px;
    font-size: 20px;
    max-width: 230px;
    width: 100%;
    font-weight: 500;
    border: 2px solid #f449fc;
    &::placeholder {

    }
}
}

</style>
