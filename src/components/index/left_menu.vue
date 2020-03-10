<template>
  <!-- 右侧轮播图区域 -->
  <div class="left-menu">
    <nav-top />
    <nav-content />
    <nav-bottom />
  </div>
</template>

<script>
import NavTop from "@/components/index/navtop.vue";
import NavContent from "@/components/index/navcontent.vue";
import NavBottom from "@/components/index/navbottom.vue";
export default {
  components: {
    NavTop,
    NavContent,
    NavBottom
  }
};
</script>

<style lang="scss">
@import "@/assets/index/left_menu.scss";
</style>
