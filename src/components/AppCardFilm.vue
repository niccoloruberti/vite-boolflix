<script>
import { hasFlag } from 'country-flag-icons';

export default {
    data() {
        return {
            hasFlag,
        }
    },
    props: {
        myCardFilm: Object,
    },
    computed: {
        generateStars() {
            let voto = this.myCardFilm.vote_average / 2;
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
                <img :src="`https://image.tmdb.org/t/p/w342${myCardFilm.poster_path}`">
            </div>
            <div class="info px-2 bg-black text-white flex-column align-items-start justify-content-center">
                <h3><span class="fs-2">Titolo:</span> {{ myCardFilm.title }}</h3>
                <h4 v-if="(myCardFilm.title !== myCardFilm.original_title)"><span class="fs-2">Titolo originale:</span> {{ myCardFilm.original_title }}</h4>
                <img class="flag" v-if="(myCardFilm.original_language) == 'en'" :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg`">
                <img class="flag" v-else-if="hasFlag(myCardFilm.original_language.toUpperCase())" :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${myCardFilm.original_language.toUpperCase()}.svg`">
                <h5 v-else>{{ myCardFilm.original_language }}</h5>
                <div>
                    <h5 class="fs-3">Voto: <i class="text-warning" v-for="star in generateStars" :class="star.filled ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i></h5>
                </div>
                <div>{{ myCardFilm.overview }}</div>
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