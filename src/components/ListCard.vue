<template>
    <div class="masonry-item col-md-6">
        <div class="bgc-white bd list-card">
        <div class="list-img">
            <img :src="`/assets/images/animals/${animal}.jpg`" :alt="`${animal} image`">
        </div>
        <div class="mT-10 p-20 d-flex align-items-center justify-content-between">
            <h4>
                {{animal | capsfirst}}
                <br>
                <small>List of {{animal}} diseases</small>
            </h4>
            <router-link class="btn btn-primary" :to="`/animals/${animal}`">See diseases</router-link>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListCard",
    props: {
        animal: String
    }
};
</script>

<style>
    .list-card{
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        overflow: hidden;
    }

    .list-card .list-img{
        width: 100%;
        height: 300px;
    }

    .list-img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
