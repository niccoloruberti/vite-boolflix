<script>
import { hasFlag } from 'country-flag-icons';

export default {
    data() {
        return {
            hasFlag,
        }
    },
    props: {
        myCardSerie: Object,
    },
    computed: {
        // funzione che crea un array dove dice se le stelle devono essere piene o vuote
        generateStars() {
            let voto = this.myCardSerie.vote_average / 2;
            let stelle = [];
            for ( let i= 0.5; i <= 4.5; i++) {
                if (voto >= i) {
                    stelle.push({filled: true});
                } else {
                    stelle.push({filled: false});
                }
            }
            return stelle;
        }
    }
}
</script>

<template lang="">
    <div class="card-container">
        <div class="card">
            <img :src="`https://image.tmdb.org/t/p/w342${myCardSerie.backdrop_path}`">
            <h3>{{ myCardSerie.name }}</h3>
            <h4>{{ myCardSerie.original_name }}</h4>
            <img class="flag" v-if="(myCardSerie.original_language) == 'en'" :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg`">
            <img class="flag" v-else-if="hasFlag(myCardSerie.original_language.toUpperCase())" :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${myCardSerie.original_language.toUpperCase()}.svg`">
            <h5 v-else>{{ myCardSerie.original_language }}</h5>
            <div>
                <i v-for="star in generateStars" :class="star.filled ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>