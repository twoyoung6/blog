import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  { path: '/', name: 'Home', component: () => import("../views/Home") },
]
const router = createRouter({
  // hash: createWebHashHistory(),
  history: createWebHistory(),
  routes: routes,
})

export default router
