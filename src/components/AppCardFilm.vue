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
    }
}
</script>

<template lang="">
    <div class="card-container">
        <div class="card">
            <img :src="`https://image.tmdb.org/t/p/w342${myCardFilm.poster_path}`">
            <h3>{{ myCardFilm.title }}</h3>
            <h4>{{ myCardFilm.original_title }}</h4>
            <img class="flag" v-if="(myCardFilm.original_language) == 'en'" :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg`">
            <img class="flag" v-else-if="hasFlag(myCardFilm.original_language.toUpperCase())" :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${myCardFilm.original_language.toUpperCase()}.svg`">
            <h5 v-else>{{ myCardFilm.original_language }}</h5>
            <h6>{{ myCardFilm.vote_average }}</h6>
        </div>
    </div>
</template>

<style lang="scss">
    .flag {
        width: 2rem;
    }
</style>