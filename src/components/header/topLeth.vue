<template>
  <div class="my-topLeft">
    <span class="header-icon">
      <i class="el-icon-location-information" />
    </span>
    <span class="current-city">{{ $store.state.position }}</span>
    <router-link class="change-city" :to="{ name: 'changeCity' }"
      >切换城市</router-link
    >
    <div class="near-citys">
      [
      <a class="city-guess" href="#">惠州</a>
      <a class="city-guess" href="#">博罗县</a>
      <a class="city-guess" href="#">惠东</a>
      ]
    </div>
    <div class="user-entry" v-if="!$store.state.userName">
      <router-link class="growth-entry user-up" :to="{ name: 'login' }"
        >立即登陆</router-link
      >
      <router-link class="extra-entry" :to="{ name: 'register' }"
        >注册</router-link
      >
    </div>
    <div class="user-entry" v-if="$store.state.userName">
      <router-link class="growth-entry user-up" to="/">{{
        $store.state.userName
      }}</router-link>
      <router-link class="extra-entry" :to="{ name: 'login' }"
        >退出</router-link
      >
    </div>
  </div>
</template>

<script>
// import api from "@/api/index.js"
export default {
  data() {
    return {
      nearCity: []
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/header/topLeth.scss";
</style>
