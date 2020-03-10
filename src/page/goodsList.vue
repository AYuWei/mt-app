<template>
  <div class="goodsList">
    <el-row>
      <!-- 面包屑 -->
      <crumbs />
    </el-row>
    <!-- 内容区 -->
    <el-row>
      <el-col :span="19" class="filter-wrapper">
        <!-- 分类 -->
        <el-row class="filter-box">
          <categroy />
        </el-row>
        <!-- 列表 -->
        <el-row class="common-list">
          <list />
        </el-row>
      </el-col>
      <el-col :span="5" class="common-wrapper">
        <right-item />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from "@/components/product/crumbs.vue";
import Categroy from "@/components/product/categroy.vue";
import List from "@/components/product/list.vue";
import RightItem from "@/components/product/rightitem.vue";
export default {
  components: {
    Crumbs,
    Categroy,
    List,
    RightItem
  }
};
</script>

<style lang="scss">
@import "@/assets/page/goodslist.scss";
</style>
