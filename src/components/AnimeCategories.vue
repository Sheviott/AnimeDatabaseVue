<template>
  <div class="category">
    <ul class="category__list">
      <li class="category__item" v-for="item in getCategory" :key="item.id">
        <v-checkbox @change="click" :name="`${item.attributes.slug}`" :label="item.attributes.title"></v-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
import { h } from 'vue'

let AnimeCategories = (props, context) => {
  return h(`h${props.level}`, context.attrs, context.slots)
}
AnimeCategories.props = [ 'categories']

export default AnimeCategories = {
  computed: {
    getCategory() {
      return this.$store.getters["category/getCategories"];
    },
  },
  methods: {
    click(e) {
      if (e.target.checked) {
        
        this.$store.commit('category/setSelectedCategories', e.target.name)
        this.$store.commit('setCountTitleOnPageOffset', 0)
        this.$store.dispatch('getAnimeDates')

      } else {
        this.$store.commit('category/deleteSelectedCategories', e.target.name)
        this.$store.commit('setCountTitleOnPageOffset', 0)
        this.$store.dispatch('getAnimeDates')
      }
    },
    getCategory(e) {
      this.$store.dispatch("category/getAnimeByCategory", e.target.value);
    },
  },
};
</script>

<style lang="scss">

.category {
  overflow: scroll;
    &__list {
    }
    &__item {
      height: 40px;
    }
    &__checkbox {
    @include fluidFontSize(16px, 28px, 480px, 1920px, 18px);
    font-size: 16px;
    padding: 3px;
    display: block;
    font-weight: 300;
    border-radius: 23px;
    }
  }
</style>
