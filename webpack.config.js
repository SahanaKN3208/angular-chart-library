// webpack.config.js
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './dist/angular-charts/fesm2022/angular-charts.mjs', // entry from ng build
  output: {
    path: path.resolve(__dirname, 'dist/angular-charts/bundled'),
    filename: 'angular-charts.bundle.js',
    library: 'AngularCharts',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  externals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common'
  },
  resolve: {
    extensions: ['.js', '.mjs']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto'
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  mode: 'production'
};
