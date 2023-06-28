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
    <div class="myCard">
    <div class="content mx-1">
        <div class="copertina h-100">
            <img :src="`https://image.tmdb.org/t/p/w342${myCardSerie.backdrop_path}`">
        </div>
        <div class="info px-2 bg-black text-white flex-column align-items-start justify-content-center">
            <h3><span class="fs-2">Titolo:</span>{{ myCardSerie.name }}</h3>
            <h4 v-if="(myCardSerie.name !== myCardSerie.original_name)"><span class="fs-2">Titolo originale: </span>{{ myCardSerie.original_name }}</h4>
            <img class="flag" v-if="(myCardSerie.original_language) == 'en'" :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg`">
            <img class="flag" v-else-if="hasFlag(myCardSerie.original_language.toUpperCase())" :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${myCardSerie.original_language.toUpperCase()}.svg`">
            <h5 v-else>{{ myCardSerie.original_language }}</h5>
            <div>
                <h5 class="fs-3"><i class="text-warning" v-for="star in generateStars" :class="star.filled ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i></h5>
            </div>
            <div>{{ myCardSerie.overview }}</div>
        </div>
    </div>
    </div>
</template>

<style lang="scss">
        .content {
            border: 1px solid white;
            height: 100%;

            .copertina {

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: fill;
                }
            }

        .info {
            display: none;

            .flag {
                    width: 2rem;
                }
        }

        .info>* {
            margin: 10px 0;
        }
    }

    .content:hover .copertina {
        display: none;
    }

    .content:hover .info {
        display: flex;
        width: 100%;
        height: 100%;
    }
</style>