<template>
  <div class="register">
    <div class="header-mini">
      <div class="wrapper">
        <a href="/index">美团</a>
        <div class="login">
          <span>已有美团账号？</span>
          <el-button type="success" @click="changePage">登录</el-button>
        </div>
      </div>
    </div>
    <div class="content">
      <el-form
        :model="registerFrom"
        status-icon
        :rules="rules"
        ref="registerFrom"
        label-width="100px"
        class="demo-registerFrom"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            type="text"
            v-model="registerFrom.userName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input
            type="password"
            v-model="registerFrom.passWord"
            autocomplete="off"
            @input="input"
          ></el-input>
          <div class="pw-strength">
            <div :class="['bar', strength]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="repassWord">
          <el-input
            type="password"
            v-model="registerFrom.repassWord"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('registerFrom')"
            :class="{ button: classXieyi ? 'button' : '' }"
            >同意一下协议并注册</el-button
          >
        </el-form-item>
      </el-form>
      <div class="xieyi">
        <span :class="['change', classXieyi]" @click="xieyi"></span>
        <a href="#">《美团点评用户服务协议》</a>
        <a href="#">《美团点评隐私政策》</a>
      </div>
    </div>
    <div class="footer-mini">
      <span>©meituan.com 京ICP证070791号 京公网安备11010502025545号</span>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error("密码必须为6-16位的字母数字下划线组成"));
      } else {
        if (this.registerFrom.repassWord !== "") {
          this.$refs.registerFrom.validateField("repassWord");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerFrom.passWord) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      strength: "",
      classXieyi: "",
      registerFrom: {
        userName: "",
        passWord: "",
        repassWord: ""
      },
      rules: {
        passWord: [{ validator: validatePass, trigger: "blur" }],
        repassWord: [{ validator: validatePass2, trigger: "blur" }],
        userName: [{ validator: validateName, trigger: "blur" }]
      }
    };
  },
  methods: {
    changePage() {
      this.$router.push({ name: "login" });
    },
    submitForm(formName) {
      if (!this.classXieyi) {
        return;
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          api
            .getRegister({
              params: {
                userName: this.registerFrom.userName,
                password: this.registerFrom.passWord,
                rePassword: this.registerFrom.repassWord
              }
            })
            .then(rem => {
              console.log(rem);
              if (rem.data.status === "success") {
                this.$message(rem.data.msg);
                this.$router.push({ name: "login" });
              } else if (rem.data.status === "fail") {
                this.$message(rem.data.msg);
              }
            });
        } else {
          return false;
        }
      });
    },
    input() {
      var regStr = /(\w)+/g;
      var regNum = /(\d)+/g;
      var reg = /_/g;
      var strongth =
        this.registerFrom.passWord.match(reg) &&
        this.registerFrom.passWord.match(regStr) &&
        this.registerFrom.passWord.match(regNum);

      if (
        this.registerFrom.passWord.length > 10 ||
        (this.registerFrom.passWord.length > 6 && strongth)
      ) {
        this.strength = "strong";
      } else if (this.registerFrom.passWord.length < 6) {
        this.strength = "weak";
      } else if (!this.registerFrom.passWord) {
        this.strength = "";
      } else {
        this.strength = "normal";
      }
    },
    xieyi() {
      if (!this.classXieyi) {
        this.classXieyi = "add";
        return;
      }
      this.classXieyi = "";
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/page/register.scss";
</style>
