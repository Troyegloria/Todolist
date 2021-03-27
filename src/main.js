// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vant, { Toast } from 'vant'
import 'vant/lib/index.css'
import http from '../http'
import theme from '../theme.less'
Vue.prototype.$http = http
Vue.prototype.$msg = Toast
Vue.use(vant)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  theme: theme
})
