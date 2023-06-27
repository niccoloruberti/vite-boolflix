<script>
export default {
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
            <h5>{{ myCard.original_language }}</h5>
            <h6>{{ myCard.vote_average }}</h6>
        </div>
    </div>
</template>

<style lang="">
    
</style>