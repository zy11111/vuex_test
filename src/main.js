// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
//导入组件库的样式表
import 'ant-design-vue/dist/antd.css'

import axios from 'axios'
// Vue.use(axios)
Vue.prototype.$axios = axios;

Vue.use(Antd)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
