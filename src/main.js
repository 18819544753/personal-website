import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import './assets/css/reset.css'
// import './assets/css/common.css'
Vue.config.productionTip = false
Vue.prototype.$cdnUrl = "https://cdn.jsdelivr.net/gh/18819544753/personal-website@develop/src/assets/images"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')