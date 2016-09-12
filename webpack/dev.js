var webpack = require('webpack');
var path = require('path');

module.exports = {
  // 定义应用入口
  entry: {
    app: path.resolve(__dirname, '../src/main.js'),
    // 打包第三方库作为公共包
    vendor: [
      'vue',
      'vue-router',
    ],
  },
  // 定义输出
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/app.js',
    publishPath: '',
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  resolve: {
    root: path.resolve('src'),
    alias: {
      views: path.resolve(__dirname, '../src/views'),
      components: path.resolve(__dirname, '../src/components'),
      assets: path.resolve(__dirname, '../src/assets'),
    },
    // 约定省略后缀
    extensions: ['', '.js', '.vue'],
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'url?limit=10000&name=images/[name].[ext]',
    }, {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader'],
    }],
  },
};

// 开发环境
if (process.env.NODE_ENV === 'dev') {
  // 配置开发服务器
  module.exports.devServer = {
    historyApiFallback: true,
    hot: true,
    progress: false,
    colors: true,
    proxy: {},
  };
  module.exports.devtool = '#cheap-module-eval-source-map';

  module.exports.plugins = [
    // 抽离公共js
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: 'js/vendor_vue.js',
    }),
  ];
}
