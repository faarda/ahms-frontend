<template>
    <dashboard>
        <div class="row gap-20 masonry pos-r">
            <list-card v-for="(animal, id) in animals" :animal="animal" :key="id"></list-card>
        </div>
    </dashboard>
</template>

<script>
import dashboard from "@/layouts/Dashboard.vue";
import listCard from "@/components/ListCard.vue";

export default {
    name: "List",
    components: {
        listCard,
        dashboard
    },
    data: function(){
        return {
            animals: ["cattle", "sheep", "rabbit", "goat"]
        }
    }
};
</script>

<style>
</style>
