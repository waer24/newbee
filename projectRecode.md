11/16-11/22

1.  [types.GET_CART_ADD]
    TODO:
    9/21 - 25

1.  js 图片加载 完成之前显示 loading 中的图片 https://blog.csdn.net/abcdef12030/article/details/94205386 product 页面

1.  ~~点击折叠面板的时候，scroll 的高度发生变化，无法及时刷新，获取最新的高度变化~~
1.  ~~不会显示出 pos.y 的值~~
1.  验证码换成滚动条
1.  better-scroll 无法滚动到底部
1.  https://blog.csdn.net/weixin_44402520/article/details/103402869 参考这篇文章，实现在点击登录之后，弹出一个图片拼图，验证通过之后跳回当前活动页面。当前先做常规验证

踩坑记
8/17-21 日

1. 保存时 CSS PX 大写自动变小写 ||eslint 分为项目配置（有.eslint.js）文件 和 vscode 的 eslint 默认配置。在 Vetur 里面来配置,"vetur.format.defaultFormatter.css": "none",关掉 vetur 的 style 格式化,然后换一个格式化插件(vue-style-beautify) 4H
2. app.vue 的动画不起效果，一直找 scss 的配置，页面结构，||是路由的 index 没配置，在判断中变成同级
3. 路由跳转动画时，class 的样式要写在过渡样式的前面，2 者的范围｛｝不能有包裹

9/14-20

1. 左右滚动的关键点: 这里要注意一下左右两个 scroll-view 外层只能包一个父级 view，不然他们俩是同步滚动的

9/27-20

1. vant 折叠版如何实现全部展示出来？ || 1. 关闭手风琴模式，accordion 要删除掉. 2. realImg0928-van-collapse.png
2. 监听 scroll 的事件一直没相应？ || 没绑定 listenScroll 事件 =>> :listenScroll="listenScroll" ;this.listenScroll = true;
3. 伪数组转化为真正的数组 || Array.prototype.slice.call(XXX)

11/1 - 11/8

1. 前一页是 home，如何进到后一页是 product/id？ | 配置 index.js 路由中/的问题，路径前面去掉/就好
2.

11/9 - 11/15

1. $route  $router 的区别是什么？ | $route是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。而$router 是“路由实例”对象包括了路由的跳转方法，钩子函数等。
2. 如果传参要 id，传到不同页面，是通过路由跳转的页面，那么子页面的参数也能通过 this.\$route 对象获取相应的参数.避免用 store 去存储(\不需要)$router为VueRouter实例，想要导航到不同URL，则使用$router.push 方法
3. get 请求是在 URl 中体现
4. state.storeList 对象有值了，给空对象并赋值，为何结果为空？ | 左右赋值弄反了
