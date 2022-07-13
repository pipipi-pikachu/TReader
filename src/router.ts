import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'List',
    meta: {
      title: '首页 - TXT 清单',
    },
    component: () => import('@/views/List.vue'),
  },
  {
    path: '/:id',
    name: 'Reader',
    meta: {
      title: '阅读器',
    },
    component: () => import('@/views/Reader/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router