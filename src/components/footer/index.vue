<template>
  <div class="my-footer">
    <footer-top />
    <footer-bottom />
  </div>
</template>

<script>
import FooterTop from "@/components/footer/footertop.vue";
import FooterBottom from "@/components/footer/footerbottom.vue";
export default {
  components: {
    FooterTop,
    FooterBottom
  }
};
</script>

<style lang="scss">
@import "@/assets/footer/index.scss";
@import "@/assets/footer/footerbottom.scss";
@import "@/assets/footer/footertop.scss";
</style>
