// 自己新建的文件
{
  module: {
    rules: [
      // ... 其它规则省略
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { modules: true },
          },
          'sass-loader',
        ],
      },
    ];
  }
  // 配置devServe.proxy
  devServer: {
    open: true;
    port: 8082;
    proxy: {
      ('/api');
      {
        target: 'http://47.99.134.126:28019'; // 你要请求的后端接口ip+port
        // 允许跨域，在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        changeOrigin: true;
        ws: true; // 开启webSocket
        pathRewrite: {
          // 替换成target中的地址
          ('^/api');
          ('');
        }
      }
    }
  }
}
