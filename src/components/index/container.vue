<template>
  <div class="container">
    <div class="nav-container">
      <dl class="navtitle" :class="nav.class" @mouseover="over">
        <dt>{{ nav.title }}</dt>
        <dd
          v-for="(item, index) in nav.list"
          :key="index"
          :data-type="item.tab"
          :class="{ active: kind == item.tab }"
        >
          {{ item.text }}
        </dd>
      </dl>
      <el-row>
        <el-col :span="8" v-for="(o, index) in navlist[kind]" :key="index">
          <el-card>
            <img :src="o.image" class="image" />
            <div class="cbody">
              <div class="title">{{ o.title }}</div>
              <div class="sub-title">{{ o.subTitle }}</div>
              <div class="price-info">
                <span class="current-price-wrapper" v-if="!o.shoukong">
                  <span class="price-symblo numfont">¥</span>
                  <span class="current-price numfont">{{ o.price }}</span>
                </span>
                <span class="current-price-wrapper" v-if="o.shoukong">
                  <span class="price-symblo numfont">¥</span>
                  <span class="current-price numfont">抢光了</span>
                </span>
                <span class="old-price" v-if="!o.shoukong"
                  >门市价¥{{ o.price / 0.8 }}</span
                >
                <span class="sold">{{ o.address }}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ["nav", "navlist"],
  data() {
    return {
      kind: "all"
    };
  },
  methods: {
    over(e) {
      const dom = e.target;
      const tagname = dom.tagName.toLowerCase();
      if (tagname != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/index/container.scss";
</style>
