<script>
import AppCard from './AppCard.vue';
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppCard,
    }
}
</script>

<template lang="">
    <div>
        <AppCard v-for="(card,index) in this.store.movies" :key='index' :myCard="card"/>
    </div>
</template>

<style lang="">
    
</style>