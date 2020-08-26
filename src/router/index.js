import vue from 'vue';
import vueRouter from 'vue-router';
vue.use(vueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('./../components/home.vue'),
    meta: {
      index: 1, // 添加 meta 属性，约定 1 为第一级
    },
    children: [
      {
        path: '/:id', // 商品详情页面
        name: 'goodsDetail',
        meta: {
          index: 2,
        },
      },
    ],
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('./../components/category.vue'),
    meta: {
      index: 1, // 添加 meta 属性，约定 1 为第一级
    },
  },
  {
    path: '/shopcar',
    name: 'shopcar',
    component: () => import('./../components/shopcar.vue'),
    meta: {
      index: 1, // 添加 meta 属性，约定 1 为第一级
    },
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('./../components/user.vue'),
    meta: {
      index: 1, // 添加 meta 属性，约定 1 为第一级
    },
  },
];

const router = new vueRouter({ routes: routes });

export default router;
