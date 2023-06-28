<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import { store } from './store';
import axios from 'axios';

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    search() {
      // chiamata per la ricerca dei film
      axios.get(`${this.store.myUrlMovies}&query=${this.store.searchText}`).then(function (response) {
      store.movies = response.data.results;
      console.log(store.movies);
      })
      // chiamata per la ricerca delle serie
      axios.get(`${this.store.myUrlSeries}&query=${this.store.searchText}`).then(function (response) {
      store.series = response.data.results;
      console.log(store.series);
      })
    }
  },
}
</script>

<template>
  <div>
    <!-- evento in ascolto dell'input -->
    <AppHeader class="fixed-top" @performSearch="search"/>
    <AppMain />
  </div>
</template>

<style lang="">
  
</style>