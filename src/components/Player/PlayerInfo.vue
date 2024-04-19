<template>
  <div class="player-panel">
    <div class="player-panel__body">
      <!-- ITEM -->
      <div class="player-panel__item" v-for="(track) in playlist" :key="track.title" v-show="track.display">
        <!-- POSTER -->
        <div class="player-panel__img">
          <img :src="track.img" alt="">
        </div>
        <div class="player-panel__top">
           

          <div class="player-panel__name">
            <!-- TITLE -->
            <div class="player-panel__wrap" :class="{
              'disabled': track.length,
            }">
              <span class="player__track"> {{ track.artist }} - {{ track.title }}</span>
            </div>
            <!-- TITLE FOR ANIMATION -->
            <div class="player-panel__wrap" :class="{
              'disabled': track.length,
            }">
              <span class="player__track"> {{ track.artist }} - {{ track.title }}</span>
            </div>
          </div>
        </div>

        <!-- PROGRESS BAR, DURATION -->
        <div class="player-panel__bottom">
          <!-- PROGRESS -->
          <v-progress-linear class="player-panel__progress-time" color="#44ffd4" model-value="0" v-model="trackProgress"
            @click="updateSeek($event)" :height="6"></v-progress-linear>
          <!-- DURATION -->
          <div class="player-panel__duration">{{ minuts(track.howl.duration()) }}</div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    playlist: Array,
    duration: Number,
    progress: Number,
  },
  mounted() {
    this.playlist.forEach(track => {
      if (track.artist.length + track.title.length > 16) {
        track.length = false;
      } else {
        track.length = true;
      }
    });
  },
  methods: {
    updateSeek(event) {
       let mousePos = event.offsetX;
       let elWidth = event.target.clientWidth;
       let percents = (mousePos / elWidth) * 100;
      this.$emit('updateseek', percents)
    }
  },
  computed: {
    minuts() {
      return (value) => {
        if (!value || typeof value !== "number") return "00:00"
        let min = parseInt(value / 60),
          sec = parseInt(value % 60)
        min = min < 10 ? "0" + min : min
        sec = sec < 10 ? "0" + sec : sec
        value = min + ":" + sec
        return value
      }
    },

    trackProgress() {
      return this.progress * 100
    },
  }

}
</script>