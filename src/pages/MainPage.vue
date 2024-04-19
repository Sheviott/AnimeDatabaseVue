<template >
  <!-- <div class="background"></div> -->
  <picture class="background">
              <source
                  media="(max-width: 768px)"
                  srcset="assets/banner5-mob.jpg 1x"
                  type="image/webp"
                />
                <img class="banner" src="assets/banner4.jpg" />
              </picture>
  <div class="wrapper">

    <!-- MAIN -->
    <main>
      <div class="top">
        <!-- BANNER -->
        <!-- <div class="banner-wrap">
            <picture>
              <source
                  media="(max-width: 768px)"
                  srcset="assets/banner5-mob.jpg 1x"
                  type="image/webp"
                />
                <img class="banner" src="assets/banner5.jpg" />
              </picture>
            </div> -->
        <!-- <div class="slider">
              <v-carousel  height="300">
                <v-carousel-item src="./assets/slider/1.jpg" cover></v-carousel-item>
                <v-carousel-item src="./assets/slider/2.jpg" cover></v-carousel-item>
                <v-carousel-item src="./assets/slider/3.jpg" cover></v-carousel-item>
                <v-carousel-item src="./assets/slider/4.jpg" cover></v-carousel-item>
              </v-carousel>
            </div> -->
        <!-- PLAYER -->
      </div>
      <div class="main">
        <div class="container">


          <!-- ANIME LIST -->
          <anime-list class="anime-list"></anime-list>
  
          <div v-observer="loadMore" class="observer"></div>
          <!-- <div v-else>Идет загрузка....</div> -->
        </div>

        <v-text-field label="Search" class="input input__search" v-debounce:600ms="updateSearch" @input="click"
          prepend-inner-icon="mdi-magnify" v-show="this.$store.state.toggleValue === 'search'"></v-text-field>

        <!-- SIDEBAR -->
        <div class="sidebar" v-show="this.$store.state.toggleValue === 'filter'">
          <v-select class="" label="Sorting" :items="getOptions" prepend-inner-icon="mdi-sort"
            @update:model-value="updateSortAndTitles"></v-select>

          <anime-categories-autocomplete></anime-categories-autocomplete>
          
        </div>

      </div>
    </main>
  </div>
</template>
  
<script>
import AnimeList from "@/components/AnimeList";
import AnimeCategoriesAutocomplete from "@/components/AnimeCategoriesAutocomplete";

export default {
  components: {
  
    AnimeList,
    AnimeCategoriesAutocomplete,
  },

  mounted() {
    // получаем массив аниме, отсортированный по популярности
    this.$store.dispatch("getAnimeDates");

    //получаем массив категорий аниме
    this.$store.dispatch("category/getAnimeCategoriesArray");
  },
  methods: {
    loadMore() {
      this.$store.commit(
        "setCountTitleOnPage",
        this.$store.state.countTitleOnPageOffset + 16
      );
      
      this.$store.dispatch("getAnimeDatesLoadMore");
      

    },
    click() {
      this.$store.commit("search/setIsLoadingInput", true);
    },
    updateSearch(e) {
      this.$store.commit("search/updateSearch", e);
      this.$store.commit("search/setIsLoadingInput", false);

      this.$store.dispatch(
        "getAnimeDates")
    },
    updateSortAndTitles(e) {
      this.$store.commit("sort/updateSelectedSort", e);
      this.$store.commit("setCountTitleOnPageOffset", 0);
      this.$store.dispatch(
        "getAnimeDates"
      ); 
    },
  },
  computed: {
    getOptions() {
      return this.$store.getters["sort/getOptions"];
    },
    getCategories() {
      return this.$store.getters["category/getCategories"];
    },
  },
};
</script>
  
<style lang="scss">
.sidebar {
  background-color: rgb(24, 26, 42);
}
.loading {
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: hidden;
    pointer-events: none;

    z-index: 1000;
    background: rgb(204 203 255 / 8%);
    backdrop-filter: blur(3px) grayscale(100%) contrast(1.1);
  img {
    max-width: 220px;
    height: auto;
  }
}
</style>
  