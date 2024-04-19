<template>
    <RouterLink :to="{ name: 'ItemPage', params: { id: title.id }}">
        <div class="anime">
            <div class="anime__image">
                <img :src="`${title.attributes.posterImage.large}`">
            </div>
            <div class="anime__info">
                <div class="anime__name">{{title.attributes.canonicalTitle}}</div>
    
                <!-- <div class="att">Popularity rank: {{ title.attributes.popularityRank }}</div>
                <div class="att">Average rating: {{ title.attributes.averageRating }}</div>
                <div class="att">createdAt: {{ title.attributes.createdAt  }}</div>
                    <div class="att">startDate: {{ title.attributes.startDate }}</div>
                <div class="att">endDate: {{ title.attributes.endDate || '----------'}}</div>
                <div class="att">Status:
                    <span :class="{
                        'ongoing': title.attributes.status == 'current',
                        'finished': title.attributes.status == 'finished' }">
                        {{ title.attributes.status }}
                    </span>
                </div> -->
            </div>
        </div>
    </RouterLink>
</template>
<script>




    export default {
        props: {
            title: {
                type: Object,
            }
        },

        methods: {

        }
    };
</script>

<style lang='scss' scoped>
    .anime {
        display: grid;
        grid-template-rows: 1fr;
        grid-auto-flow: auto;
        max-width: 400px;
        width: 100%;

        display: grid;
        border-radius: 15px;
        background-color: #433468;
        background-color: #42466c;
        background-color: #26253a;
        position: relative;
      
        &-item {
            transition: all 0.3s ease 0s;
            &:hover {
                img {
                    transition: all 0.3s ease 0s;
                    filter: none;
                }
            }
        }
        &__info {
            width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgb(10 0 12 / 79%);

        }

        &__name {
    padding: 10px 0;
    line-height: 1.2;
    font-size: 18px;
    font-family: "Tilt Neon", cursive;
    text-align: center;
    text-shadow: #d43ffb 0px 0px 5px;
        }
        &__image {
            img {
                border-top-right-radius: 15px;
                border-top-left-radius: 15px;
                filter: brightness(80%) grayscale(0.15);
                transition: all 0.3s ease 0s;
            }

        }
    }

    .att {
        margin-bottom: 6px;
        font-size: 13px;
    }

    .ongoing {
        color: red;
        font-size: 16px;
    }

    .finished {
        color: rgb(81, 128, 216);
        font-size: 16px;
    }
</style>