<template>
  <el-container class="layout-default">
    <el-header>
      <my-header />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>

    <el-footer height="">
      <my-footer />
    </el-footer>
  </el-container>
</template>

<script>
import myHeader from "../components/header/index.vue";
import myFooter from "../components/footer/index.vue";
export default {
  components: {
    myHeader,
    myFooter
  }
};
</script>

<style lang="scss">
.layout-default {
  width: 100%;
  & .el-header {
    position: relative;
    width: 100%;
    color: #666;
    height: 196px !important;
    padding-bottom: 44px;
    background-color: #f8f8f8;
  }
  & .el-main {
    margin: auto;
    padding: 0px;
    overflow: visible;
  }
}
</style>
