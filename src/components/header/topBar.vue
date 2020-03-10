<template>
  <div class="my-topbar my-header-topbar">
    <el-row>
      <el-col class="bar" :span="10">
        <top-left />
      </el-col>
      <el-col class="bar" :span="14">
        <top-right />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TopLeft from "./topLeth.vue";
import TopRight from "./topRight.vue";
export default {
  components: {
    TopLeft,
    TopRight
  }
};
</script>

<style lang="scss" scoped></style>
