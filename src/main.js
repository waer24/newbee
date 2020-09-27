import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "./vant.js";
import "lib-flexible";
import md5 from "js-md5"; // 全局引入MD5

Vue.config.productionTip = false;
Vue.prototype.$md5 = md5;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");