<template>
  <div class="react">
    <!-- 选择省份 -->
    <op-area></op-area>
    <!-- 热门城市 -->
    <hot title="热门城市:" :list="hotList" />
    <!-- 最近访问 -->
    <hot title="最近访问:" :list="rencentList" />
    <!-- 按拼音 -->
    <category />
  </div>
</template>

<script>
import api from "@/api";
import OpArea from "@/components/changeCity/op_area.vue";
import Hot from "@/components/changeCity/hot.vue";
import Category from "@/components/changeCity/category.vue";
export default {
  data() {
    return {
      hotList: [], // 热门城市
      rencentList: []
    };
  },
  components: {
    OpArea,
    Hot,
    Category
  },
  created() {
    api.getCityList().then(rem => {
      this.hotList = rem.data.data.map(item => item.name);
    });
    api.getRrvrnyd().then(rem => {
      this.rencentList = rem.data.data.map(item => item.name);
    });
  }
};
</script>

<style lang="scss">
@import "@/assets/changeCity/index.scss";
</style>
