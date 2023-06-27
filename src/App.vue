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
    searchFilms() {
      console.log(this.store.searchText)
      axios.get(`${this.store.myUrl}&query=${this.store.searchText}`).then(function (response) {
      console.log(response.data)
      })
    }
  },
}
</script>

<template>
  <div>
    <AppHeader @performSearch="searchFilms"/>
    <AppMain />
  </div>
</template>

<style lang="">
  
</style>