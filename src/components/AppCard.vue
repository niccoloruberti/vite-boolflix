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
    }
}
</script>

<template lang="">
    <div class="card-container">
        <div class="card">
            <h3>{{ myCard.title }}</h3>
            <h4>{{ myCard.original_title }}</h4>
            <img class="flag" v-if="(myCard.original_language) == 'en'" :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg`">
            <img class="flag" v-else-if="hasFlag(myCard.original_language.toUpperCase())" :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${myCard.original_language.toUpperCase()}.svg`">
            <h5 v-else>{{ myCard.original_language }}</h5>
            <h6>{{ myCard.vote_average }}</h6>
        </div>
    </div>
</template>

<style lang="scss">
    .flag {
        width: 2rem;
    }
</style>