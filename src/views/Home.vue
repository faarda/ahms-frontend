<template>
    <dashboard>
        <div class="row gap-20 masonry pos-r">
            <div class="masonry-sizer col-md-6"></div>
            <statistics />
            <history />
        </div>
    </dashboard>
</template>

<script>
import dashboard from "@/layouts/Dashboard.vue";
import statistics from "@/components/Statistics";
import history from "@/components/History";

export default {
    name: "home",
    components: {
        statistics,
        history,
        dashboard
    }
};
</script>

<style></style>
