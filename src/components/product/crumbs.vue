<template>
  <!-- 面包屑，导航条 -->
  <div class="crumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }" class="breadcrumb-item"
        >{{ $store.state.position }}美团</el-breadcrumb-item
      >
      <el-breadcrumb-item class="breadcrumb-item" :to="{ path: '/' }"
        >{{ $store.state.position }}{{ $route.params.name }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<style lang="scss">
@import "@/assets/product/crumbs.scss";
</style>
