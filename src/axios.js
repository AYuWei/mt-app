const axios = require("axios");
axios.defaults.baseURL = "http://api.duyiedu.com";
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.params = {
      ...config.params,
      appkey: "15728238198_1569593310259"
    };
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axios;
