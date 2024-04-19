<template>
    <div class="category">
        <v-autocomplete
            label="Ganre"
            chips
            clearable
            v-model="selected"
            @update:modelValue="updateSelected"
            @click:clear="clearSelected"
            :items="getCategory"
            multiple
            hide-no-data="false"
        ></v-autocomplete>
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        selected: null,
      }
    },
    mounted() {
    
    },
    computed: {
      getCategory() {
        return this.$store.getters["category/getCategories"]
      },
    },
    methods: {
      updateSelected() {
        this.$store.commit('category/setSelectedCategories', this.selected)
        this.$store.commit('setCountTitleOnPageOffset', 0)
        this.$store.dispatch('getAnimeDates')
      }, 
      clearSelected() {
        this.selected == null;
        this.$store.commit('category/setSelectedCategories', this.selected)
        this.$store.commit('setCountTitleOnPageOffset', 0)
        this.$store.dispatch('getAnimeDates')
      }
    },
  };
  </script>
  