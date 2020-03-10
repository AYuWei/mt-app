import axios from "@/axios.js";

var api = {
  // 热门搜索
  getSearchHotWords() {
    return axios.get("/api/meituan/header/searchHotWords.json");
  },
  // input 输入框关键字
  getSearch() {
    return axios.get("/api/meituan/header/search.json");
  },
  // 有格调
  getResultsStyle() {
    return axios.get("/api/meituan/index/resultsByKeywords.json");
  },
  // 省份列表
  getProvince() {
    return axios.get("/api/meituan/city/province.json");
  },
  // 热门城市列表
  getCityList() {
    return axios.get("/api/meituan/city/cityList.json");
  },
  // 热门城市
  getHot() {
    return axios.get("/api/meituan/city/hot.json");
  },
  // 最近搜索城市
  getRrvrnyd() {
    return axios.get("/api/meituan/city/recents.json");
  },
  // 产品列表数据获取
  getGoodsList() {
    return axios.get("/api/meituan/list/goodsList.json");
  },
  // 推荐产品列表
  getRecommend() {
    return axios.get("/api/meituan/list/recommend.json");
  },
  // 获取分类列表
  getClassify() {
    return axios.get("/api/meituan/list/classify.json");
  },
  // 获取区域列表
  getAreaList() {
    return axios.get("/api/meituan/list/areaList.json");
  },
  // 获取当前地理位置信息
  getPosition() {
    return axios.get("/api/meituan/city/getPosition.json");
  },
  // 获取当前位置信息
  getPositionDatail() {
    return axios.get("/api/meituan/product/detail.json");
  },
  // 登录
  getLogin(params) {
    return axios.get("/api/meituan/login", params);
  },
  // 注册
  getRegister(params) {
    return axios.get("/api/meituan/register", params);
  }
};

export default api;
