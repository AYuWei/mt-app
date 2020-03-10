<template>
  <div class="my-search">
    <div class="header-title">
      <a href="#" class="fixcont">
        <img
          src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
          alt="美团"
        />
      </a>
    </div>
    <div class="header-search-module">
      <div class="wrapper">
        <el-input
          v-model="searchWord"
          placeholder="输入商家或地点"
          @blur="blurInput"
          @focus="focusInput"
          @input="input"
        ></el-input>
        <el-button type="primary" icon="el-icon-search"></el-button>
        <dl class="hotPlace" v-if="isHotPlace">
          <dt>热门搜索</dt>
          <!-- <dd v-for="(item , index) in rmlist" :key="index"  @click="changeText(item)">
            <router-link :to="{name : 'goods' , params : {name : item}}">{{ item }}</router-link>
          </dd> -->
          <router-link
            :to="{ name: 'goods', params: { name: item } }"
            v-for="(item, index) in rmlist"
            :key="index"
            @click="changeText(item)"
            ><dd>{{ item }}</dd></router-link
          >
        </dl>
        <dl class="searchList" v-if="issearchList">
          <dd
            v-for="(item, index) in searchList"
            :key="index"
            @click="changeText(item)"
          >
            <router-link :to="{ name: 'goods', params: { name: item } }">{{
              item
            }}</router-link>
          </dd>
          <dd>
            <router-link
              :to="{ name: 'goods', params: { name: searchWord } }"
              >{{ searchWord }}</router-link
            >
          </dd>
        </dl>
      </div>
      <p class="suggest">
        <router-link
          :to="{ name: 'goods', params: { name: item } }"
          v-for="(item, index) in suggest"
          :key="index"
          >{{ item }}</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      rmlist: [], // 热门搜索
      suggest: [], //
      searchList: [] // input
    };
  },
  created() {
    api.getSearchHotWords().then(rem => {
      this.suggest = rem.data.data;
      this.rmlist = rem.data.data;
    });
  },
  methods: {
    focusInput() {
      this.isFocus = true;
    },
    blurInput() {
      let self = this;
      setTimeout(() => {
        self.isFocus = false;
      }, 200);
    },
    changeText(prop) {
      this.searchWord = prop;
    },
    input() {
      let val = this.searchWord;
      api.getSearch().then(rem => {
        this.searchList = rem.data.data.list.filter((item, index) => {
          return item.indexOf(val) > -1;
        });
      });
    }
  },
  computed: {
    isHotPlace() {
      return !this.searchWord && this.isFocus;
    },
    issearchList() {
      return this.searchWord && this.isFocus;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/header/searchbar.scss";
</style>
