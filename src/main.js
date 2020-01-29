import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import router from "./router/index";

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)

import 'material-icons/iconfont/material-icons.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
