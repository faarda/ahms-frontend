<template>
  <span :id="id"></span>
</template>

<script>
import "jquery-sparkline";

export default {
  name: "sparkline",
  props: {
    id: String,
    color: String,
    data: Array
  },
  mounted() {
    $("#" + this.id).sparkline(this.data, {
      type: "bar",
      height: "20",
      barWidth: "3",
      resize: true,
      barSpacing: "3",
      barColor: this.color
    });
  }
};
</script>

<style></style>
