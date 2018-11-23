<template>
  <div id="app">
    <app-navigation v-if="currentUser"></app-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./views/Navigation";
import { mapState } from "vuex";
export default {
  components: {
    "app-navigation": Navigation
  },
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>

<style scoped>
</style>
