<template>
      <div class="masonry-item  w-100">
        <div class="row gap-20">
            <!-- #Toatl Visits ==================== -->
            <div class="col-md-3">
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Rectal temprature</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer peer-greed">
                                <spark-line id="sparkline-1" :data="[0, 5, 6, 10, 9, 12, 4, 9]" color="#4caf50"></spark-line>
                            </div>
                            <div class="peer">
                                <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">65&deg;C</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- #Total Page Views ==================== -->
            <div class="col-md-3">
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Beats per minute</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer peer-greed">
                                <spark-line id="sparkline-2" :data="[0, 5, 6, 10, 9, 12, 4, 9]" color="#9675ce"></spark-line>
                            </div>
                            <div class="peer">
                                <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">25</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- #Unique Visitors ==================== -->
            <div class="col-md-3">
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Last variable</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer peer-greed">
                                <spark-line id="sparkline-3" :data="[0, -5, 6, 10, 9, 12, 4, 9]" color="#03a9f3"></spark-line>
                            </div>
                            <div class="peer">
                                <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">19</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- health summary -->
            <div class='col-md-3'>
                <div class="layers bd c-white p-20" :class="summary == 'healthy' ? 'bgc-green-500' : 'bgc-red-300'">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Health summary</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer peer-greed">

                            </div>
                            <div class="peer">
                                <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 " :class="summary == 'healthy' ? 'bgc-blue-50 c-blue-500' : 'bgc-purple-50 c-red-500'">{{summary | capsfirst}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sparkLine from "./sparkline";

export default {
    name: "statistics",
    components: {
        sparkLine
    },
    data: function () {
        return {
            summary: 'healthy'
        }
    }
};
</script>

<style>

</style>