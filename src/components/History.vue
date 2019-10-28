<template>
<div class="masonry-item col-md-12">
    <!-- #Monthly Stats ==================== -->
    <div class="bd bgc-white">
        <div class="layers">
            <div class="layer w-100 pX-20 pT-20">
                <h6 class="lh-1">Health history</h6>
            </div>
            <div class="layer w-100 p-20">
                <!-- <canvas id="line-chart" height="400"></canvas> -->
                <line-chart :showing="showing" :values="data[showing]"></line-chart>
            </div>
            <div class="layer bdT p-20 w-100">
                <div class="row align-items-center px-3">
                    Change duration:
                    <div class="form-group col-6 col-md-3 mb-0">
                          <select id="inputState" class="form-control" v-model="showing">
                            <option selected>Choose...</option>
                            <option v-for="(option, id) in options" :key="id" :value="option">{{option}}</option>
                          </select>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</div>
</template>

<script>
import lineChart from "./LineChart.vue";
export default {
    name: "History",
    components: {
        lineChart
    },
    data: function(){
        return {
            showing: "day",
            options: ["day", "week", "month"],
            data: {
                day: {
                    a: [60, 50, 70, 60, 50, 70, 60],
                    b: [70, 75, 85, 70, 75, 85, 70],
                    c: [100, 75, 65, 70, 80, 95, 120]
                },
                week: {
                    a: [60, 50, 70, 60, 50, 70, 60],
                    b: [70, 75, 85, 70, 75, 85, 70],
                    c: [100, 75, 65, 70, 80, 95, 120]
                },
                month: {
                    a: [60, 50, 70, 60, 50, 70, 60],
                    b: [70, 75, 85, 70, 75, 85, 70],
                    c: [100, 75, 65, 70, 80, 95, 120]
                }
            },
            prototype: {
                a: [],
                b: [],
                c: []
            }
        }
    },
    created(){
        let day = {...this.prototype};
        for (let index = 0; index < 24; index++) {
            day.a.push(Math.floor(Math.random() * 150) + 60);
            day.b.push(Math.floor(Math.random() * 150) + 60);
            day.c.push(Math.floor(Math.random() * 150) + 60);
        }

        this.data.day = day;

        let month = {...this.prototype};
        for (let index = 0; index < 30; index++) {
            month.a.push(Math.floor(Math.random() * 150) + 60);
            month.b.push(Math.floor(Math.random() * 150) + 60);
            month.c.push(Math.floor(Math.random() * 150) + 60);
        }

        this.data.month = month;

        let week = {...this.prototype};
        for (let index = 0; index < 7; index++) {
            week.a.push(Math.floor(Math.random() * 150) + 60);
            week.b.push(Math.floor(Math.random() * 150) + 60);
            week.c.push(Math.floor(Math.random() * 150) + 60);
        }

        this.data.week = week;
    }
}
</script>

<style>

</style>
