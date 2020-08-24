1. 2020/8/17-8/21
   关于 UI 选型，最终用 Vant，快读开发，有赞出品。

   1. iview 文档丰富，更新到了 4.X，有很多 bug，越用到后面内存泄漏越严重，卡顿。
   2. element-UI 更适合用于 PC 端。
   3. vuetify.js 也有 UI 框架，国外团队开发，可以不写一行 CSS 代码，不适合我练手，巩固知识。
   4. antd 也很好，与 react 是高度贴合的。
   5. 环境搭建基础工作：路由(router)、全局状态管理(vuex)、移动端适配(lib-flexible/postcss-pxtorem)、UI 框架(vant)，Axios 请求库二次封装、公用组件文件、公用函数文件等等
   6. vant 要在 babel.config.js 配置转化
   7. lib-flexible,vant 要在 main.js 引入
   8. 移动端 px 转换成 rem， px2rem-loader 要在 vue.config.js 或者 postcssrc.js 配置,自己新建
   9. 大写的 PX，可以避开被编译成 rem 单位，用在字体和圆角上比较方便
   10. //TODO 研究下为什么用 symbol 的方式不能显示 iconfont

2. 2020/8/24-8/29
   1. router-link 不支持点击事件，换成 div 的可以用点击事件。
