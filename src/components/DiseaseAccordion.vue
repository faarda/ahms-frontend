<template>
      <div class="accordion w-100" id="diseaseAccordion">
        <div class="card" v-for="(disease, id) in diseases" :key="id">
            <div class="card-header bgc-grey-700 c-white" id="headingOne">
                <h5 class="mb-0 d-flex align-items-center justify-content-between" data-toggle="collapse" :data-target="`#disease${id}`" :aria-expanded="id == 0 ? 'true' : 'false'" :aria-controls="`disease${id}`">
                    {{disease.name | capsfirst}}

                    <span class="icon-holder">
                        <i class="ti-angle-down"></i>
                    </span>
                </h5>
            </div>

            <div :id="`disease${id}`" class="collapse" :class="id == 0 ? 'show' : ''" data-parent="#diseaseAccordion">
                <div class="card-body">
                    <!-- {{disease.text}} -->
                    <disease :disease="disease.disease"></disease>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import disease from '@/components/Disease.vue';
export default {
    props:{
        diseases: Array
    },
    components: {
        disease
    }
}
</script>

<style>
    .accordion .card-header {
        cursor: pointer;
    }
</style>