import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import Bus from '../博客/组件通信/eventBus/bus'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 事件总线注册
// Vue.prototype.$bus = new Bus()
Vue.prototype.$bus = new Vue()

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
