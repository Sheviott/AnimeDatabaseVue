<template>
    <div>
        <div class="item__background"></div>
        <div class="item__body">
            <!-- <div class="item__top">
                <div class="item__banner">
                    <img src="assets/itempage/banner.webp">
                </div>
            </div> -->
            <div class="item__bottom">
                <div class="item__image">
                    <img src="assets/itempage/poster.jpg">
                </div>
                <div class="item__info">
                <div class="item__row">
                        <div class="item__name">
                            Shingeki no Kyojin / 
                        </div>
                        <div class="item__abbr">
                            AoT
                        </div>
                </div>
              <div class="item__wrap">
                    <div class="item__block">
                        <div class="item__title">Information</div>
                            <div class="item__rating text">
                               Rating: 8.54
                            </div>
                            <div class="item__episode text">
                                episodeCount: 
                            </div>
                            <div class="item__agerating text">
                                ageRating: 
                            </div>
                            <div class="item__date text">
                                Date: 07.04.2013
                            </div>
                            <div class="item__status text">
                                Status: Ongoing
                            </div>
                    </div>
                    <div class="item__block">
                        <div class="item__title">Ganre</div>
                            <span class="item__ganre text">
                               Horror
                            </span>
                            <span class="item__ganre text">
                               Horror
                            </span>
                            <span class="item__ganre text">
                               Horror
                            </span>
                            <span class="item__ganre text">
                               Horror
                            </span>
                            <span class="item__ganre text">
                               Horror
                            </span>
                            <span class="item__ganre text">
                               Horror
                            </span>
             
                    </div>
              </div>
                    <div class="item__block">
                        <div class="item__title">Description</div>
                        <div class="item__description text">
                            Taking off right after the last episode of the first season. The school is temporarily closed due to security. When U.A. restarts, it is announced that the highly anticipated School Sports Festival will soon be taking place. All classes: Hero, Support, General and Business will be participating. Tournaments all around will decide who is the top Hero in training.
                        </div>
                    </div>
                    <div class="item__block">
                        <div class="item__title">Video</div>
                        <div class="item__trailer">
                            <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/KKzmOh4SuBc?si=SCYQKCBN2Wt-o1cx"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .item {

        &__background {
            position: fixed;
            width: 100%;
            min-height: 100vh;
            background-image: url(../../public/assets/banner51.jpg);
            background-size: cover;
            background-attachment: fixed;
            filter: blur(2px) brightness(0.6);
        }

        &__body {
            width: 100%;
            position: absolute;
            height: 100%;
        }

    
        &__top {}
        &__block {
            width: 100%;
            margin-bottom: rem(30);
        }
        &__wrap {
            display: flex;
            gap: 40px;
        }
        &__banner {
            img {
                width: 100%;
                height: 100%;
                max-height: 300px;
            }
        }
        &__title {
            padding: 10px;
            background-color: rgba($color: #000000, $alpha: 0.6);
            font-size: 25px;
            margin-bottom: 20px;
            font-family: 'Expletus Sans', sans-serif;
        }
        &__bottom {
            display: flex;
            flex-flow: row nowrap;
            max-width: 1200px;
            margin: 0px auto;
            padding: 0 15px;
            gap: 40px;
            margin-top: rem(40);
            padding: 40px 20px;
            width: 100%;
            border: 5px solid black;
            background-color:rgb(40 37 58 / 94%);;

        }

        &__image {
            flex:  0 0 30%;
            img {
                height: auto;
            }
        }

        &__info {}
    
        &__row {
            display: flex;
            margin-bottom: 40px;
            align-items: end;
            gap: 10px;
        }
        &__name {
            font-size: 40px;
            font-family: 'Expletus Sans', sans-serif;
        }
        
        &__abbr {
            line-height: 24px;
            font-size: 25px;
            font-family: 'Expletus Sans', sans-serif;

        }

        &__ganre {
          padding: 15px;
          margin-bottom: 10px;
        }

        &__date {
            
        } 

        &__status {
       
        }

        &__description {
            line-height: 26px;
  
        }

        &__trailer {}
    }
    .text {
            font-size: 20px;
            margin-bottom: rem(15);
            padding-left: 10px;
            font-family: 'Hind', sans-serif;
        }
</style>