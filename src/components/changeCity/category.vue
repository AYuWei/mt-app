<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in letter" :key="item">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <div class="m-category-section">
      <dl
        v-for="(item, index) in cityGroup"
        :key="item + '_' + index"
        :id="'city-' + index"
      >
        <dt>{{ index }}</dt>
        <dd>
          <span v-for="(o, i) in item" :key="i" @click="changeCity(o)">{{
            o.name
          }}</span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      letter: "abcdefghjklmnpqrstwxyz".toUpperCase().split(""),
      cityList: [],
      cityGroup: null
    };
  },
  methods: {
    changeCity(item) {
      this.$store.dispatch("setPosition", item.name); // 更改数据
      this.$router.push({ name: "index" }); // 页面跳转
    }
  },
  // 生命周期创建时的
  created() {
    var data = [
      {
        id: 2,
        name: "澳门",
        pinyin: "aomen",
        acronym: "am",
        firstChar: "a"
      },
      {
        id: 1,
        name: "北京",
        pinyin: "beijing",
        acronym: "bj",
        firstChar: "b"
      },
      {
        id: 3,
        name: "重庆",
        pinyin: "chongqing",
        acronym: "cq",
        firstChar: "c"
      },
      {
        id: 4,
        name: "大连",
        pinyin: "dalian",
        acronym: "dl",
        firstChar: "d"
      },
      {
        id: 5,
        name: "东莞",
        pinyin: "dongguan",
        acronym: "dg",
        firstChar: "d"
      },
      {
        id: 7,
        name: "佛山",
        pinyin: "foshan",
        acronym: "fs",
        firstChar: "f"
      },
      {
        id: 8,
        name: "广州",
        pinyin: "guangzhou",
        acronym: "gz",
        firstChar: "g"
      },
      {
        id: 19,
        name: "河源",
        pinyin: "heyuan",
        acronym: "hy",
        firstChar: "h"
      },
      {
        id: 20,
        name: "合肥",
        pinyin: "hefei",
        acronym: "hf",
        firstChar: "h"
      }
    ];
    var obj = {};
    data.forEach((item, index) => {
      if (!obj[item.firstChar.toUpperCase()]) {
        obj[item.firstChar.toUpperCase()] = [];
      }
      obj[item.firstChar.toUpperCase()].push(item);
    });
    this.cityGroup = obj;
  }
};
</script>

<style lang="scss">
@import "@/assets/changecity/category.scss";
</style>
