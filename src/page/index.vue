<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu :navlist="navlist" />
      </el-col>
      <el-col :span="19">
        <m-left />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="iStyle" :navlist="iStylelist"></container>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="recomment" :navlist="iStylelist"></container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api";
import navlist from "@/js/navlist.js"; // 导航区数据
import MMenu from "@/components/index/nav_menu.vue";
import MLeft from "@/components/index/left_menu.vue";
import Container from "@/components/index/container.vue";
export default {
  data() {
    return {
      navlist,
      iStyle: {
        class: "istyle",
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "food"
          },
          {
            text: "丽人SPA",
            tab: "spa"
          },
          {
            text: "电影演出",
            tab: "movie"
          },
          {
            text: "品质出游",
            tab: "travel"
          }
        ]
      },
      iStylelist: {},
      recomment: {
        class: "youhui",
        title: "很优惠",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "美食",
            tab: "food"
          },
          {
            text: "休闲",
            tab: "xiuxian"
          }
        ]
      }
    };
  },
  components: {
    MMenu,
    MLeft,
    Container
  },
  created() {
    api.getResultsStyle().then(rem => {
      this.iStylelist = rem.data.data;
    });
  }
};
</script>

<style lang="scss">
@import "@/assets/page/index.scss";
</style>
