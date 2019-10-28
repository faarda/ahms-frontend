<template>
<div class="disease w-100">
    <div class="disease-img">
        <img :src="`/assets/images/diseases/${disease.img}.jpg`" alt="">
    </div>
    <div class="disease-body">
        <div class="disease-introduction">
            <h6><b>Disease description</b></h6>
            {{disease.description}}
        </div>
        <div class="disease-causes">
            <h6><b>Disease causes</b></h6>
            <div class="list-group">
                <span class="list-group-item" v-for="(causes, id) in disease.causes" :key="id">
                    {{causes}}
                </span>
            </div>
        </div>
        <div class="disease-symptoms">
            <h6><b>Disease symptoms</b></h6>
            <div class="list-group">
                <span class="list-group-item" v-for="(symptoms, id) in disease.symptoms" :key="id">
                    {{symptoms}}
                </span>
            </div>
        </div>
        <div class="disease-treatment">
            <h6><b>Disease treatment</b></h6>
            <div class="list-group">
                <span class="list-group-item" v-for="(treatment, id) in disease.treatment" :key="id">
                    {{treatment}}
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        disease: Object
    }
}
</script>

<style>
    .disease-img{
        width: 100%;
        height: 350px;
        border-radius: 10px;
        overflow: hidden;
    }

    .disease-img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .disease-body > *{
        margin-top: 20px;
    }
</style>
