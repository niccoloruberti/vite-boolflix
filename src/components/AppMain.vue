<script>
import AppCardFilm from './AppCardFilm.vue';
import AppCardSerie from './AppCardSerie.vue';
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppCardFilm,
        AppCardSerie,
    }
}
</script>

<template lang="">
    <div>
        <!-- ciclo che crea le card dei film, passando i dati ad AppCard tramite props -->
        <AppCardFilm v-for="(card,index) in this.store.movies" :key='index' :myCardFilm="card"/>
        <!-- ciclo che crea le card delle serie tv, passando i dati ad AppCard tramite props -->
        <AppCardSerie v-for="(card,index) in this.store.series" :key='index' :myCardSerie="card"/>
    </div>
</template>

<style lang="">
    
</style>