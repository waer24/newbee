import vue from "vue";
import vueRouter from "vue-router";
import VueRouter from "vue-router";

vue.use(vueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // component:() => import
  },
];

const router = new VueRouter({ routes: routes });

export default router;
