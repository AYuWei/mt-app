<template>
  <div class="my-header">
    <el-row class="my-top-bar">
      <top-bar />
    </el-row>
    <el-row class="my-search-bar">
      <search-bar />
    </el-row>
  </div>
</template>

<script>
import TopBar from "./topBar.vue";
import searchBar from "./searchBar.vue";
export default {
  components: {
    TopBar,
    searchBar
  }
};
</script>

<style lang="scss">
@import "@/assets/header/index.scss";
</style>
