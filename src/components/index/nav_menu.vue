<template>
  <!-- 左侧导航区 -->
  <div class="m-menu">
    <dl @mouseleave="menuLeave">
      <dt class="title">{{ navlist.title }}</dt>
      <dd
        v-for="(item, index) in navlist.list"
        :key="index"
        @mouseenter="menuEnter(item)"
      >
        <i :class="[item.type, item.icon]"></i>
        <router-link :to="{ name: 'goods', params: { name: item } }">{{
          item.text
        }}</router-link>
        <i class="iconyousanjiao-copy-copy-copy icon-right"></i>
      </dd>
    </dl>
    <div
      class="detail"
      v-if="curDetail"
      @mouseenter="detailEnter"
      @mouseleave="detailLeave"
    >
      <dl v-for="(item, index) in detaillist" :key="index">
        <dt>
          {{ item.title
          }}<span
            >更多<i class="iconyousanjiao-copy-copy-copy icon-right"></i
          ></span>
        </dt>
        <dd v-for="(res, prop) in item.list" :key="res + '_' + prop">
          <router-link :to="{ name: 'goods', params: { name: res } }">{{
            res
          }}</router-link>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
// navlist : {
//     title : "全部分类",
//     list : [
//         {
//             type : "字体图标class",
//             icon : "字体图标名字，方便设置颜色",
//             text : '导航栏标题',
//             arr : [{title : "标题" , list : ['','',''] }] // 导航栏下面的子菜单
//         }
//     ]
// }

export default {
  props: ["navlist"],
  data() {
    return {
      curDetail: null,
      detaillist: ""
    };
  },
  methods: {
    menuEnter(item) {
      this.detaillist = item.arr;
      this.curDetail = true;
    },
    menuLeave() {
      var self = this;
      this.timer = setTimeout(() => {
        self.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.curDetail = null;
    }
  }
};
</script>

<style lang="css">
@import "//at.alicdn.com/t/font_1649205_w2fvk7qicr.css";
</style>

<style lang="scss">
@import "@/assets/index/nav_menu.scss";
</style>
