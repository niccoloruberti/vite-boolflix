<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {

    },
}
</script>

<template lang="">
    <div>
        <input v-model="this.store.searchText" type="text">
        <button @click="$emit('performSearch')">Cerca</button>
    </div>
</template>

<style lang="">
    
</style>