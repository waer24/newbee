import vue from "vue";
import vueRouter from "vue-router";
vue.use(vueRouter);

const routes = [{
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "home",
        component: () =>
            import ("./../components/home.vue"),
        meta: {
            index: 1, // 添加 meta 属性，约定 1 为第一级
        },
        children: [{
            path: ":id", // 以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;
            //在生成路由时，主路由上的path会被自动添加到子路由之前，子路由上的path不用在重新声明主路由上的path了
            name: "homeDetail",
            component: () =>
                import ("./../components/home-detail.vue"),
            meta: {
                index: 2,
            },
        }, ],
    },
    {
        path: "/category",
        name: "category",
        component: () =>
            import ("./../components/category.vue"),
        meta: {
            index: 1, // 添加 meta 属性，约定 1 为第一级
        },
        children: [{
            path: ":id",
            name: "search",
            component: () =>
                import ("./../components/search.vue"),
            meta: {
                index: 2,
            },
        }, ],
    },
    {
        path: "/shopcar",
        name: "shopcar",
        component: () =>
            import ("./../components/shopcar.vue"),
        meta: {
            index: 1, // 添加 meta 属性，约定 1 为第一级
        },
    },
    {
        path: "/user",
        name: "user",
        component: () =>
            // import ("./../components/user.vue"),
            import ("./../views/login.vue"),
        meta: {
            index: 1, // 添加 meta 属性，约定 1 为第一级
        },
    },
];

const router = new vueRouter({ routes: routes });

export default router;