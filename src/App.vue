<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <appSpinner></appSpinner>

    <router-view />

  </div>
</template>

<script>
import appSpinner from "@/components/Spinner.vue";
import appSidebar from "@/components/Sidebar.vue";
import appHeader from "@/components/Header.vue";

export default {
  components: {
    appSpinner,
    appSidebar,
    appHeader
  }
};
</script>
