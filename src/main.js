import Vue from 'vue'
import App from './App.vue'// 根组件
import router from './router'// 路由
import store from './store'// 引入vuex容器
import 'amfe-flexible' // 动态设置 REM 基准值
import './utils/register-vant' // 引入vant组件
import './styles/index.less' // 引入全局样式
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
