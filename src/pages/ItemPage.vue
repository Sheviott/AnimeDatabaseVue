<template>
  <div class="item" style="height: 100%;" v-for="title in titles" :key="title.mal_id">
    <div class="item__background">
      <div class="item__body">
        <div class="item__image">
          <img :src="`${title.attributes.posterImage.large}`" />
        </div>
        <!-- <div class="item__right"> -->
          <div class="item__row row1">
            <div class="item__name">
              {{ title.attributes.canonicalTitle || 'unknown' }}
            </div>
            <div class="item__rating text">
              Rating: {{ title.attributes.averageRating || '-'}}
            </div>
          </div>
          <div class="item__row row2">
            <div class="item__block block">
              <div class="block__title">Information</div>
              <div class="block__body">
                <div class="block__episode text">
                  Episodes: {{ title.attributes.episodeCount || 'unknown' }}
                </div>
                <div class="block__agerating text">
                  Age Rating: {{ title.attributes.ageRating || 'unknown' }}
                </div>
                <div class="block__date text">
                  Date: {{ title.attributes.startDate || 'unknown' }}
                </div>
                <div class="block__status text">
                  Status: {{ title.attributes.status || 'unknown' }}
                </div>
              </div>
            </div>
            <div class="item__block block ganres-block">
              <div class="block__title">Ganre</div>
              <div class="block__body">
                <a href="" @click="goToSearch" v-for="item in ganres" :key="item.id" class="block__ganre">
                  {{ item.attributes.title || 'unknown' }}
                </a>
              </div>
  
            </div>
          </div>
          <div class="item__row row3">
            <div class="item__block block">
              <div class="block__title">Description</div>
              <div class="block__body">
                <div class="block__description text">
                  {{ title.attributes.description || 'unknown' }}
                </div>
              </div>
            </div>
          </div>
          <div class="item__row row4">
            <div class="item__block block">
              <div class="block__title">Video</div>
              <div class="block__body">
                <div class="block__trailer">
                  <iframe
                    :src="`https://www.youtube.com/embed/${title.attributes.youtubeVideoId}`" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
  export default {

    data() {
      return {
        titles: null,
        ganres: null,
      }
    },
    created() {
       this.$store.dispatch("getAnimePageById", { id: this.$route.params.id})
       .then( response => {
        this.titles = response.data.data
        this.ganres = response.data.included
       })
       .catch(e => console.error('Ошибка!', e.message)); 
    },
    mounted() {
     
    },

    methods: {
      goToSearch() {
        this.$router.push('/')
      },
      setTitle(e) {
        this.title = e;
      },
    },
    
  };
</script>

<style lang="scss" scoped>
  .item {
    &__background {
      background-image: url(../../public/assets/banner51.jpg);
      background-size: cover;
      background-attachment: fixed;
      backdrop-filter: blur(2px) brightness(0.6);
      padding: 70px 20px;
      @media (max-width: 768px){
        padding: 60px 10px;
       
    }
    }

    &__body {
    
      width: 100%;
      height: 100%;
      padding: 0 15px;
      max-width: 1200px;
      margin: 0px auto;
      padding: 0 15px;
      column-gap: 40px;
      row-gap: 20px;
      padding: 40px 20px;
      width: 100%;
      border: 5px solid black;
      display: grid;
      grid-template-areas:
      "image title"
      "image info"
      "image desc"
      ". video";
      background-color: rgb(40 37 58 / 94%);
      @media (max-width: 768px){
        grid-template-areas:
      "image"
      "title"
      "info"
      "desc"
      "video";
        }
        padding: 20px 15px;
    }

    &__image {
      max-width: 400px;
      grid-area: image;
      @media (max-width: 768px){
      justify-self: center;
        }
      img {
        height: auto;
      }
    }

    &__right {}

    &__row {
      display: flex;
      gap: 10px;
      flex-flow: row nowrap;
    }
    .row1 {
      grid-area: title;
      @media (max-width: 768px){
        .text {
          padding: 0;
          text-align: right;
        }
        flex-flow: column nowrap;
        }
      @media (max-width: 768px){
        
        }
      
    }
    .row2 {
      grid-area: info;
    }
    .row3 {
      grid-area: desc;
    }
    .row4 {
      grid-area: video;
    }
    &__name {
      font-size: 36px;
      font-family: 'Expletus Sans', sans-serif;
      @media (max-width: 768px){
        text-align: center;
      }
    }

    &__rating {}

    &__block {
      width: 100%;
    }

    &__title {

    }
  }
  .block {

    &__title {
      padding: 10px;
      background-color: rgba($color: #000000, $alpha: 0.6);
      font-size: 24px;
      margin-bottom: 20px;
      font-family: 'Expletus Sans', sans-serif;
    }

    &__body {}

    &__episode {}

    &__agerating {}

    &__date {}

    &__status {}

    &__ganre {
      padding: 0 10px;
      font-size: 18px;
      margin-bottom: 10px;
    }

    &__description {
      line-height: 26px;

    }

    &__trailer {
      iframe {
        height: 290px;
        width: 100%;
      }
    }


    
  }
  .text {
    font-size: 18px;
    margin-bottom: rem(15);
    padding-left: 10px;
    font-family: 'Hind', sans-serif;

  }
  .ganres-block {
    .block__body {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
    }
  }
</style>