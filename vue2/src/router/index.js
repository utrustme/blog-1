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
        component: () => import('../../博客/组件通信/props-$emit/parent.vue'),
      },
      {
        path: 'eventBus',
        name: 'eventBus',
        component: () => import('../../博客/组件通信/eventBus/compA.vue'),
      },
      {
        path: '$attrs-$listeners',
        name: '$attrs-$listeners',
        component: () =>
          import('../../博客/组件通信/$attrs-$listeners/compA.vue'),
      },
      {
        path: '$refs',
        name: '$refs/$parent...',
        component: () => import('../../博客/组件通信/$refs/index.vue'),
        children: [
          {
            path: '$refs',
            name: '$refs',
            component: () =>
              import('../../博客/组件通信/$refs/$refs/parent.vue'),
          },
          {
            path: '$parent-$children',
            name: '$parent-$children',
            component: () =>
              import('../../博客/组件通信/$refs/$parent-$children/parent.vue'),
          },
        ],
      },
      {
        path: 'provide-inject',
        name: 'provide-inject',
        component: () => import('../../博客/组件通信/provide-inject/compA.vue'),
      },
      {
        path: 'vuex',
        name: 'vuex',
        component: () => import('../../博客/组件通信/vuex/compA.vue'),
      },
      {
        path: 'v-slot',
        name: 'v-slot',
        component: () => import('../../博客/组件通信/v-slot/parent.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
