<template>
  <div class="m-categroy">
    <dl class="classic fenlei">
      <dt>分类</dt>
      <dt class="active">全部</dt>
      <dd class="fenlei" v-for="(item, index) in fenleidata" :key="index">
        <m-select :title="item.title" :list="item.subList" />
      </dd>
    </dl>
    <dl class="classic quyu">
      <dt>区域</dt>
      <dt class="active">全部</dt>
      <dd v-for="(item, index) in quyudata" :key="index">
        <m-select :title="item.title" :list="item.subList" />
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api";
import MSelect from "./mselect.vue";
export default {
  components: {
    MSelect
  },
  data() {
    return {
      // 分类数据
      fenleidata: [],
      // 区域数据
      quyudata: [
        {
          title: "推荐商圈",
          subList: [
            {
              name: "望京",
              id: 120000
            },
            {
              name: "昌平",
              id: 12222
            }
          ]
        }
      ]
    };
  },
  created() {
    api.getClassify().then(rem => {
      this.fenleidata = rem.data.data;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/product/categroy.scss";
</style>
