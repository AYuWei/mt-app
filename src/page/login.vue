<template>
  <div class="loader">
    <div class="header">
      <header>
        <a class="site-logo" href="http://www.meituan.com"></a>
      </header>
    </div>
    <div class="main">
      <div class="promotion-banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
        <div class="validate-info">
          <p v-if="error" class="error">
            <i class="iconjinzhi"></i>
            {{ error }}
          </p>
        </div>
        <p class="title">
          <span>账号登录</span>
          <a href="#">
            手机动态码登录
            <i class="iconshouji"></i>
          </a>
        </p>
        <el-input
          v-model="userName"
          placeholder="请输入账号"
          prefix-icon="iconyonghu"
        ></el-input>
        <el-input
          v-model="passWord"
          type="password"
          placeholder="请输入密码"
          prefix-icon="iconmima"
        ></el-input>
        <p class="notpass fix">
          <a href="#">忘记密码？</a>
        </p>
        <el-button type="success" @click="submit">登 录</el-button>
        <p class="signup">
          <span>还没有账号？</span>
          <router-link :to="{ name: 'register' }">免费注册</router-link>
        </p>
      </div>
      <div class="wrapper-footer">
        <h3>用合作网站账号登录</h3>
        <p></p>
      </div>
    </div>
    <div class="footer">
      <footer>
        <div class="site-info-nav">
          <ul class="fix">
            <li>
              <a href="#">关于美团</a>
            </li>
            <li>
              <a href="#">加入我们</a>
            </li>
            <li>
              <a href="#">商家入驻</a>
            </li>
            <li>
              <a href="#">帮助中心</a>
            </li>
            <li>
              <a href="#">美团手机版</a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <span
            >©2020 美团网团购 meituan.com 京ICP证070791号
            京公网安备11010502025545号</span
          >
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      userName: "",
      passWord: "",
      error: ""
    };
  },
  methods: {
    submit() {
      if (!this.userName) {
        this.error = "请输入账号";
        return false;
      }
      if (!this.passWord) {
        this.error = "请输入密码";
        return false;
      }
      api
        .getLogin({
          params: {
            userName: this.userName,
            password: this.passWord
          }
        })
        .then(rem => {
          console.log(rem);
          if (rem.data.status === "success") {
            this.$store.commit("setUserName", this.userName);
            this.$router.push({ name: "index" });
            this.$message("登录成功！");
          } else {
            this.error = rem.data.msg;
          }
        });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/page/login.scss";
</style>
<style lang="css">
@import "//at.alicdn.com/t/font_1649205_xylir47por.css";
</style>
