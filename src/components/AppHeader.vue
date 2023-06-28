<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        scrollTop() {
            window.scrollTo(0,0)
        }
    },
}
</script>

<template lang="">
    <div>
        <header class="bg-black d-flex justify-content-between align-items-center">
                <span class="text-danger text-uppercase fs-1 fw-bold mx-3">boolflix</span>
            <div class="mx-3">
                <input placeholder="Inserisci un titolo" class="rounded" v-model="this.store.searchText" type="text" @keyup.enter="$emit('performSearch'), scrollTop()">
                <!-- emit per inviare i dati dell'input al padre -->
                <button class="btn px-1 py-0 ms-2 btn-light" @click="$emit('performSearch'), scrollTop()">Cerca</button>
            </div>
        </header>
    </div>
</template>

<style lang="scss">
    
</style>