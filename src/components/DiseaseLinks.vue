<template>
    <div class="bgc-white p-20 bd">
        <h6 class="c-grey-900">Useful links</h6>
        <div class="mT-30">
            <div class="list-group">

                <!-- <a href="#" class="list-group-item list-group-item-action actived">
                    Cras justo odio
                </a> -->
                <a :href="link.href" target="_blank" class="list-group-item list-group-item-action" v-for="(link, id) in links" :key="id">{{link.text}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        links: Array
    },
    data: function(){
        return {
    
        }
    }
}
</script>

<style>

</style>
