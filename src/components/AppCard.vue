<script>
import { hasFlag } from 'country-flag-icons';

export default {
    data() {
        return {
            hasFlag,
        }
    },
    props: {
        myCard: Object,
    },
    computed: {
        generateStars() {
            let voto = this.myCard.vote_average / 2;
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
                <img :src="`https://image.tmdb.org/t/p/w342${myCard.poster_path}`">
            </div>
            <div class="info px-2 bg-black text-white flex-column align-items-start justify-content-center">
                <!-- titolo -->
                <h3 v-if="(myCard.title)"><span class="fs-2">Titolo:</span> {{ myCard.title }}</h3>
                <h3 v-else><span class="fs-2">Titolo:</span> {{ myCard.name }}</h3>
                <!-- titolo originale (se diverso dal precedente) -->
                <h4 v-if="(myCard.title !== myCard.original_title && myCard.original_title )"><span class="fs-2">Titolo originale:</span> {{ myCard.original_title }}</h4>
                <h4 v-if="(myCard.name !== myCard.original_name && myCard.original_name )"><span class="fs-2">Titolo originale:</span> {{ myCard.original_name }}</h4>
                <!-- lingua -->
                <img class="flag" v-if="(myCard.original_language) == 'en'" :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg`">
                <img class="flag" v-else-if="hasFlag(myCard.original_language.toUpperCase())" :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${myCard.original_language.toUpperCase()}.svg`">
                <h5 v-else>{{ myCard.original_language }}</h5>
                <!-- voto -->
                <div>
                    <h5 class="fs-3">Voto: <i class="text-warning" v-for="star in generateStars" :class="star.filled ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i></h5>
                </div>
                <!-- overview -->
                <div>{{ myCard.overview }}</div>
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