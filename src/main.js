import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import './assets/css/reset.css'
// import './assets/css/common.css'
Vue.config.productionTip = false
Vue.prototype.$cdnUrl = "http://cdn.chenxiaoman.top/assets/images" // 七牛cdn
// Vue.prototype.$cdnUrl = "https://cdn.jsdelivr.net/gh/18819544753/personal-website@develop/src/assets/images" // jsdelivr cdn
let homeScrollTop = 0;
Vue.prototype.$homeScroll = homeScrollTop; // 全局滚动位置

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')