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
   2. 父组件要重置子组件的一个样式，用！important 无效，因为 style 中有 scoped，转化成[data-vue-XXX]，无法穿透这个组件的样式，那一般是如何重设样式呢？ 有 3 个方法：去掉 scoped；混用本地和全局样式；使用深度作用选择器，>>>在 sass 中无法被解析，用/deep/ 操作符取而代之，但是仅 chrome 浏览器支持,当前用 deep 解决了，如果/deep/报样式错误，用 ::v-deep 就好，是它的别名。
   3. 使用 vue-router 的子路由，需要在父组件利用 router-view 占位,我的问题在于位置错了！！就是定义页面中点击的部分，<router-view> 定义显示部分，就是点击后，区配的内容显示在什么地方，会被匹配到的组件替换掉

2020/12/7-12

1.  详情的购物车数量如何做到一点击会+1， 相同 id 第二次提示“已经添加了”，返回的时候也会有上一次的记录。这个问题困扰了一周之久
    1. 在页面统计，用 data（）记录一个 count，再监听点击事件， name： addCart 问题：只有点击的时候才显示出值 || 可以不用 watch，显示用 computed 增加 this.scortCount = Object.keys(this.storeList).length;
    2. https://blog.csdn.net/weixin_45568648/article/details/108017668?utm_medium=distribute.pc_relevant.none-task-blog-title-2&spm=1001.2101.3001.4242
    3. 页面统计，用 computed 返回一个值，监听值， || 出现数据更新在退回页面之后才能看到最新数据
    4. state 中创建值，mutatiion 赋值，页面引用，第二次更新没生效 || vuex 不会监听数组的变化，文章衍生 https://segmentfault.com/a/1190000022772025

2021/1/5-1-10

1.                     ...mapMutations(["GET_CART_ADD", "GET_CART_REDUCE"]),
    ...mapMutations(["GET_CART_ADD"], ["GET_CART_REDUCE"]),
    第二个错误，报错 GET_CART_REDUCE is not a function ,找错误很久没发现，非常低级的错误。第一个正确，
2.  vue 数据不实时更新（数据更改了，但数据不实时更新），点击加减购物车数量. 蠢办法，重新赋值 1. this.list = "";
    this.list = Object.values(JSON.parse(localStorage.getItem("storeList"))); 2. 类似问题：添加问题不更新： https://juejin.cn/post/6844903765951119368
3.  数据源不一致导致的点击问题, 是取了 localstorage 的值之后，另一边又修改了 local 的值，并覆盖了原来的值

2021/1/11-1/15

1.  cart 页面右滑删除的时候，删除 item 时，无法删除单个 item，只能整个一起删除，要么用 substring 字符串截断，因为 localstorage 是一个整个的字符串，增加了很多无用功。且刷新之后，数据本来就不存在，还是改用 vuex 的 state 统一管理数据源
2.  stateList 改用为[ ], 遇到的问题是如何判断 item 已经添加到 storeList 中，原来用对象可以直接比对 key 值。考虑对比循环中 value 的 shopId 和参数的 shopId，相同的话 return，不同则 push 到 storeList 中。遇到的问题是每次只要对比 shopId 不同时，都会 push 一次。导致同一个 item 要 push 很多次。询问王科提示，取一个标识位 flag，如果相同则 flag 改变，同时 return，但是依然没 get 到。下午时分，鬼使神差的用了 isDuplicate === true ? state.storeList.push(obj) : state.storeList; 才得到正确的值
3.  以上反思：
    1.  当结果可能需要不同的结果时，考虑标识位 + 三目取结果
    2.  当每个 item 都循环时，考虑跳出当前循环取赋值
    3.  当移除时，页面一片空白时，考虑是否作为一个整体删除了
4.  购物车对象转数组,因为没有 length 属性，不能用 array.from 转化
5.  gettersd 的调用需要用方法时，才保证每次都调用更新

1. map用于返回一个新数组，for ...of满足找到新条件，停止循环
2. 去item要想到index

12/21-12-25
TODO

1. 加入购物车的频繁点击 ， this.storeList()的代码优化
2. checkOne() 函数优化，只用一个循环完成?
3. cart.vue checkOne()函数是否可以优化
