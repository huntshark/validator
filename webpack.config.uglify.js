
const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'validator.min.js',

    // lib
    library: "jxmValidator",
    libraryTarget: 'umd',
  },

  // 压缩
  plugins: [
    new uglify()
  ],
};
