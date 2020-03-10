import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 放置我们需要用到的元信息
const state = {
  position: "河源",
  userName: ""
};

// 改变vuex的状态--只能实现同步
const mutations = {
  setPosition(state, val) {
    state.position = val;
  },
  setUserName(state, val) {
    state.userName = val;
  }
};

// 可执行异步代码
const actions = {
  setPosition({ commit }, val) {
    // 异步请求后端获取当前位置的数据。
    commit("setPosition", val);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
