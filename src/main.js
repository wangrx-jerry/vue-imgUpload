// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' 
import exif from 'exif-js' //用于获取拍摄图片的基本信息（例如：拍摄方向）
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.prototype.EXIF = exif;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
