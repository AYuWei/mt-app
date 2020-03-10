import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import mySelect from "./select/"; // 自己写的下拉列表

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(mySelect);

Vue.directive("document-change", {
  // el为元素本身, bindings为绑定的数据, vnode虚拟dom。
  // 执行一次，绑定到元素的时候调用
  bind(el, binding, vnode) {
    document.addEventListener("click", binding.value, false);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
