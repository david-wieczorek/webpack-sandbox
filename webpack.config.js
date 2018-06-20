const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: false
  },
  mode: 'development',
  watch: false,
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
    quiet: false,
    noInfo: false,
    watchOptions: {
      ignored: /\/node_modules\/.*/
    }
  }
};
