<template>
  <div class="op_area">
    <div class="choose-province">
      <span class="name attr">按省份选择:</span>
      <!-- 省份 -->
      <my-select
        :title="'省份'"
        :value="province"
        :list="provincelist"
        :showWraperActive="provinceShow"
        @change_active="changeProvinceActive"
        @change="changeProvince"
      ></my-select>
      <!-- 城市 -->
      <my-select
        :title="'城市'"
        :value="city"
        :list="citylist"
        :showWraperActive="cityShow"
        @change_active="changeCityActive"
        @change="changeCity"
        :disabled="cityDisabled"
      ></my-select>
      <div class="l-attr">
        <span class="attr">直接搜索:</span>
        <el-select
          v-model="searchWord"
          filterable
          remote
          reserve-keyword
          placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="loading"
        >
          <el-option
            v-for="item in searchList"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      provincelist: [],
      province: "省份",
      citylist: [],
      city: "城市",
      provinceShow: false,
      cityShow: false,
      searchList: [""],
      searchWord: "",
      loading: false,
      cityDisabled: true
    };
  },
  created() {
    api.getProvince().then(res => {
      this.provincelist = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
    });
    api.getHot().then(rem => {
      this.searchList = rem.data.data.map(item => item.name);
    });
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceShow = flag;
      this.cityDisabled = false;
      if (flag) {
        this.cityShow = false;
      }
    },
    changeCityActive(flag) {
      this.cityShow = flag;
      if (flag) {
        this.provinceShow = false;
      }
    },
    // 将省份列表的数据传递到这
    changeProvince(item) {
      this.citylist = item.cityInfoList;
    },
    // 城市列表传递的数据
    changeCity(item) {
      this.$store.dispatch("setPosition", item.name);
      this.$router.push({ name: "index" });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/changecity/oparea.scss";
</style>
