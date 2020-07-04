import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import $ from 'jquery';
import 'bootstrap';

Vue.prototype.axios=axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

// 添加请求拦截器
axios.interceptors.request.use(function (config){
  var token=localStorage.getItem("token").toString();
  // 在发送请求之前做些什么
  // 判断是否存在token,如果存在将每个页面header添加token
  if(token!==""){
    config.headers.common['token'] =token;
    return config;
  }
});