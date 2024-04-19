<template>
  <div>
        <!-- HEADER -->
        <webapp-header></webapp-header>

  <RouterView></RouterView>
  <mini-player v-show="this.$store.state.toggleValue === 'music'"></mini-player>
  <div class="actions">
            <v-btn-toggle variant="text" density="comfortable" class="" v-model="toggleBottom">
              <v-btn value="music" class="bottom-btns">
                <v-icon>mdi-sort</v-icon>
                <span class="player ">Player</span>
              </v-btn>
              <v-btn value="search" :disabled="isButtonDisabled" class="bottom-btns">
                <v-icon >mdi-magnify</v-icon>
                <span class="Search">Search</span>
              </v-btn>
              <v-btn value="filter" :disabled="isButtonDisabled" class="bottom-btns">
                <v-icon>mdi-shape</v-icon>
                <span class="">filter</span>
              </v-btn>
            </v-btn-toggle>
          </div>
  </div>
  <div v-if="this.$store.state.isAnimsLoading" class="loading">
     <img src="assets/Loading.gif" alt="">
   </div>
</template>

<script>
import webappHeader from "@/views/webappHeader";
import MiniPlayer from "@/components/Player/MiniPlayer";

  export default {
    computed: {
      isButtonDisabled() {
      // Проверяем, находится ли маршрут в состоянии отключения кнопки
      return this.$route.meta.disableButton || false;
    },
      toggleBottom: {
      get() {
        return this.$store.state.toggleValue;
      },
      set(value) {
        this.$store.commit('setToggleValue', value)
      },
    },
    },
    components: {
    webappHeader,
    MiniPlayer,
  },
  }
</script>
<style lang="scss">

.loading {
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: hidden;
    pointer-events: none;

    z-index: 1000;
    background: rgb(204 203 255 / 20%);
    backdrop-filter: blur(3px) grayscale(100%) contrast(1.1);
  img {
    max-width: 220px;
    height: auto;
  }
}
</style>