import vue from 'vue';
import vueRouter from 'vue-router';
vue.use(vueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('./../components/home.vue'),
    meta: {
      index: 1, // 添加 meta 属性，约定 1 为第一级
    },
  },
  {
    path: '/category',
    component: () => import('./../components/category.vue'),
    meta: {
      index: 1, // 添加 meta 属性，约定 1 为第一级
    },
  },
  {
    path: '/shopcar',
    component: () => import('./../components/shopcar.vue'),
    meta: {
      index: 1, // 添加 meta 属性，约定 1 为第一级
    },
  },
  {
    path: '/user',
    component: () => import('./../components/user.vue'),
    meta: {
      index: 1, // 添加 meta 属性，约定 1 为第一级
    },
  },
];

const router = new vueRouter({ routes: routes });

export default router;
