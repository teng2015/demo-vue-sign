var webpack = require('webpack');
var merge = require('webpack-merge');
var dev = require('./dev');
var path = require('path');

module.exports = merge(dev, {
  // 可以合并一些配置
  // output: {
  //   path: path.resolve(__dirname, '../dist'),
  //   filename: 'js/app.js',
  //   publicPath: 'dist/',
  // },
  // 可以在这里配置对应的输出CDN路径如 http://localhost:8080/
});

if (process.env.NODE_ENV === 'prod') {
  module.exports.devtool = false;
  module.exports.plugins = [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // 抽离公共js
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: 'js/vendor_vue.js',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
  ];
}