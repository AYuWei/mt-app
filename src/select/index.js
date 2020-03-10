import mySelect from "./src/select.vue";

mySelect.install = Vue => {
  Vue.component(mySelect.name, mySelect);
  Vue.directive("document-click", {
    // el为元素本身, bindings为绑定的数据, vnode虚拟dom。
    // 执行一次，绑定到元素的时候调用
    bind(el, binding, vnode) {
      document.addEventListener("click", binding.value, false);
    }
  });
};

export default mySelect;
