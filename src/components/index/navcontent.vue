<template>
  <div class="navcontent">
    <div class="slider">
      <div class="block">
        <el-carousel height="240px">
          <el-carousel-item v-for="(item, index) in imgsrc" :key="index">
            <router-link to="/">
              <img :src="item" />
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="pic">
      <a href="#">
        <img
          src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"
          alt="休闲生活"
          title="休闲生活"
        />
      </a>
    </div>
    <div class="login">
      <div>
        <img
          v-if="!$store.state.userName"
          src="http://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
          alt="用户"
        />
        <img
          v-if="$store.state.userName"
          src="//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png"
          alt=""
        />
      </div>
      <p>Hi！{{ $store.state.userName ? $store.state.userName : "你好！" }}</p>
      <router-link :to="{ name: 'register' }" v-if="!$store.state.userName">
        <el-button round>
          <router-link :to="{ name: 'login' }">登录</router-link>
        </el-button>
      </router-link>
      <router-link :to="{ name: 'register' }" v-if="!$store.state.userName">
        <el-button round>
          <router-link :to="{ name: 'register' }">注册</router-link>
        </el-button>
      </router-link>
      <div class="yearlogin" v-if="$store.state.userName">
        <div>
          <i class="iconaiguifanfile"></i>
          <p>我的订单</p>
        </div>
        <div>
          <i class="iconshoucang"></i>
          <p>我的收藏</p>
        </div>
        <div>
          <i class="icondiyongquan"></i>
          <p>抵用卷</p>
        </div>
        <div>
          <i class="iconyue"></i>
          <p>余额</p>
        </div>
        <div>
          <i class="icongengduo"></i>
          <p>更多</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgsrc: [
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/index/navcontent.scss";
</style>

<style lang="css">
@import "//at.alicdn.com/t/font_1649205_cwcwfncv9zs.css";
</style>
