<template>
<canvas id="line-chart" height="400"></canvas>
</template>

<script>
import Chart from 'chart.js';
import {
    COLORS
} from '../app-scripts/colors';

export default {
    props: {
        showing: String,
        values: Object
    },
    data: function () {
        return {
            lineChartBox: "",
            lineCtx: "",
            datasets: {},
            labels: [],
            constants: {
                a: {
                    color: "purple",
                    bg: "rgba(237, 231, 246, 0.5)",
                    name: "Rectal Temprature"
                },
                b: {
                    color: "blue",
                    bg: "rgba(232, 245, 233, 0.5)",
                    name: "Beats per minute"
                },
                c: {
                    color: "pink",
                    bg: "rgba(244, 143, 177, 0.3)",
                    name: "Last variable"
                }
            }
        }
    },
    mounted(){
        this.lineChartBox = document.getElementById('line-chart');
        this.lineCtx = this.lineChartBox.getContext('2d');
        this.lineChartBox.height = 80;
        this.getLabels();
        this.getDataset();
        this.showChart();
    },
    methods: {
        getDataset(){
            let dataset = [];
            for (const key in this.values) {
                let tempValues = {
                    label: this.constants[key].name,
                    backgroundColor: this.constants[key].bg,
                    borderColor: COLORS[`${this.constants[key].color}-500`],
                    pointBackgroundColor: COLORS[`${this.constants[key].color}-700`],
                    borderWidth: 2,
                    data: this.values[key],
                }

                dataset.push(tempValues);
            }

            this.datasets = dataset;
        },
        getLabels(){
            let labels = [];
            if (this.showing == "day") {
                labels = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"]
            } else if (this.showing == "week") {
                labels = ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday", "Sunday"]
            } else {
                for (let index = 0; index < 30; index++) {
                    labels.push(`${index}/10`);
                }
            }

            this.labels = labels
        },
        showChart(){
            new Chart(this.lineCtx, {
                type: 'line',
                data: {
                    labels: this.labels,
                    datasets: this.datasets
                },
                options: {
                    legend: {
                        display: false,
                    },
                },

            });
        }
    },
    watch:{
        showing(){
            this.getLabels();
            this.getDataset();
            this.showChart();
        }
    }
}
</script>

<style>

</style>
