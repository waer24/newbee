import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import './vant.js';
import 'lib-flexible';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
