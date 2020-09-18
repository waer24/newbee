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
