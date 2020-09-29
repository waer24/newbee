# newbee

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

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

TODO:
9/21 - 25

1. ~~点击折叠面板的时候，scroll 的高度发生变化，无法及时刷新，获取最新的高度变化~~
2. ~~不会显示出 pos.y 的值~~
3. 验证码换成滚动条
4. better-scroll 无法滚动到底部
5. https://blog.csdn.net/weixin_44402520/article/details/103402869 参考这篇文章，实现在点击登录之后，弹出一个图片拼图，验证通过之后跳回当前活动页面。当前先做常规验证
