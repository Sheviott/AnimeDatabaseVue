<template>
    <div class="anime-list">
        <anime-item  class="anime-item" v-for="title in getAllAnims" :title="title" :key="title.mal_id">
        </anime-item>
        
    </div>
</template>

<script>
import AnimeItem from './AnimeItem.vue';

    export default {
        components: {
            AnimeItem
        },
        computed: {
            getAllAnims() {
                this.$store.commit('setLoading', false)
                return this.$store.getters['getAllAnims'];
                
            }
        },
              
        methods: {
        }
    }
</script>

<style scoped>
.anime-list {
    width: 100%;
    height: 100%;
    padding: 20px 50px;
    display: grid;
    justify-content: center;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(235px, auto));
}
</style>