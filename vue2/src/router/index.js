import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/组件通信',
    name: '组件通信',
    component: Home,
    children: [
      {
        path: 'props-$emit',
        name: 'props-$emit',
        component: () => import('../../博客/组件通信/props-$emit/index.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
