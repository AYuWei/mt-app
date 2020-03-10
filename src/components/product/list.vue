<template>
  <div class="list">
    <div class="list-nav">
      <dl>
        <dt>智能排序</dt>
        <dd>价格排序</dd>
        <dd>人气最高</dd>
        <dd>评价最高</dd>
      </dl>
    </div>
    <div class="list-item">
      <item v-for="(item, index) in goodList" :list="item" :key="index" />
    </div>
  </div>
</template>
<script>
import api from "@/api";
import Item from "@/components/product/item.vue";
export default {
  data() {
    return {
      goodList: []
    };
  },
  components: {
    Item
  },
  created() {
    // 获取产品数据列表
    api.getGoodsList().then(rem => {
      this.goodList = rem.data.data;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/product/list.scss";
</style>
