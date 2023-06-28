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
    <div class="background bg-secondary">
        <div class="container">
            <div class="row">
                <h1 v-if="(store.movies.length >= 1)" class="text-white my-3 mt-5 pt-5">FILM</h1>
                <!-- ciclo che crea le card dei film, passando i dati ad AppCard tramite props -->
                <AppCard class="col-4 my-3" v-for="(card,index) in this.store.movies" :key='index' :myCard="card"/>
            </div>
            <div class="row">
                <h1 v-if="(store.series.length >= 1)" class="text-white my-3 mt-5 pt-5">SERIE TV</h1>
                <!-- ciclo che crea le card delle serie tv, passando i dati ad AppCard tramite props -->
                <AppCard class="col-4 my-3" v-for="(card,index) in this.store.series" :key='index' :myCard="card"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

.background {
    min-height: 100vh;
}

</style>