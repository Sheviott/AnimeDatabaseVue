<template>
  <div class="player__wrapper">
    <div class="player__body">
      <!-- MUTE, VOLUME SLIDER -->
      <div class="player__volume-wrapp">
        <!-- SLIDER -->
        <v-slider class="player__volume" color="#ff5add" track-color="#da84ff" thumb-color="#44ffd4" v-model="volume"
          direction="vertical" max="1" step="0.1"></v-slider>
        <!-- MUTE -->
        <button @click="muteTrack" class="player__button button button__volume">
          <img v-if="!this.muted" src="assets/volume.svg" alt="">
          <img v-else src="assets/mute.svg" style="z-index: 10; pointer-events: all;" alt="">
        </button>
      </div>
      <!-- INFO - TITLE, PROGRESS BAR, DURATION -->
      <player-info class="player__info" :duration="dur" :playlist="this.playlist" :progress="progress"
        @updateseek="setSeek"></player-info>


      <!-- PLAY -->
      <button :disabled="btnDisabled" class="player__button button button__play" @click="playTrack">
        <img v-if="!this.playing" src="assets/play2.svg" alt="">
        <img v-else src="assets/pause2.svg" alt="">
      </button>

      <!-- NEXT -->
      <button :disabled="btnDisabled" class="player__button button button__next" @click="nextTrack">
        <img src="assets/next.svg" alt="">
      </button>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Howl, Howler } from 'howler'
import PlayerInfo from './PlayerInfo.vue'

export default {

  components: {
    PlayerInfo
  },
  data() {
    return {
      playingTrack: null,
      playing: false,
      index: 0,
      volume: 0.2,
      oldVolume: 0.2,
      muted: false,
      maxIndex: 0,
      btnDisabled: false,
      seek: 0,
      dur: ref(1),
      playlist: [
        { title: "Dreamland", artist: "Desired", img: './assets/music/1.jpg', src: './assets/music/Desired_Dreamland.mp3', howl: null, display: true },
        { title: "Josuke Theme", artist: "rinov", img: './assets/music/2.jpg', src: './assets/music/Josuke_Theme.mp3', howl: null, display: false },
        { title: "Stone Ocean", artist: "rinov", img: './assets/music/3.jpg', src: './assets/music/Stone_Ocean.mp3', howl: null, display: false },
        { title: "Bae City", artist: "illuminate", img: './assets/music/4.jpg', src: './assets/music/Bae_City.mp3', howl: null, display: false },

      ],
    }
  },
  created: function () {
    this.maxIndex = this.playlist.length - 1;
    this.playlist.forEach((track) => {
      let scr = track.src
      track.howl = new Howl({
        html5: true,
        preload: 'metadata',
        src: [scr],
      })
      setTimeout(() => {
        this.dur = track.howl.duration()
      }, 500);
    })

    this.playingTrack = this.playlist[0]

    Howler.volume(this.volume)
  },
  watch: {
    playing(playing) {
      this.seek = this.playingTrack.howl.seek()
      let updateSeek
      if (playing) {
        updateSeek = setInterval(() => {
          this.seek = this.playingTrack.howl.seek()
        }, 250)
      } else {
        clearInterval(updateSeek)
      }

    },
    volume(volume) {
      Howler.volume(volume)
      if (volume == 0) {
        this.muted = true;
      } else {
        this.muted = false;
      }
    },
    seek(seek) {
      if (seek == 0) {
        this.playing = false;
      
        this.playingTrack.display = false;
        this.playingTrack = this.playlist[this.index]
        this.playTrack()
        this.playingTrack.display = true;
      }
    }
  },
  computed: {
    progress() {
      if (this.playingTrack.howl.duration() === 0) return 0
      return this.seek / this.playingTrack.howl.duration()
    }
  },
  methods: {
    playTrack() {
      this.btnDisabled = true;
      let track = this.playingTrack.howl
      if (!this.playingTrack.howl.playing()) {
        this.playing = true;
        track.play();
      } else {
        this.playing = false;
        track.pause();
      }
      setTimeout(() => {
          this.btnDisabled = false;
      }, 1000)


    },
    nextTrack() {
      this.btnDisabled = true;
      this.playingTrack.howl.stop();
      this.playingTrack.display = false;
      if (this.index < this.maxIndex) {
        this.index = this.index + 1;
      } else {
        this.index = 0;
      }
      this.playingTrack = this.playlist[this.index]
      this.playingTrack.display = true;
      let track = this.playlist[this.index].howl
      track.play();
      setTimeout(() => {
        this.btnDisabled = false;
      }, 1000)
      this.playing = true;
      console.log(this.playing);
    },
    muteTrack() {
      this.btnDisabled = true;
      if (this.volume > 0) {
        this.oldVolume = this.volume
      }
      if (this.muted === false) {
        this.volume = 0;
        this.muted = true;
        this.playingTrack.howl.mute(true);
      } else if (this.muted === true) {
        this.playingTrack.howl.mute(false);
        this.volume = this.oldVolume;
        this.muted = false;
      }
      setTimeout(() => {
          this.btnDisabled = false;
      }, 1000)
    },
    updateVolume(volume) {
      Howler.volume(volume)
    },
    setSeek(percents) {
      let track = this.playingTrack.howl
      if (track.playing()) {
        track.seek((track.duration() / 100) * percents)
      }
    },
  },
}
</script>

<style lang="scss">
@import "./player.scss";
</style>