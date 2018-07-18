
const UglifyJs = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'validator.min.js',

    // lib
    library: 'jxmValidator',
    libraryTarget: 'umd'
  },

  // compress
  plugins: [
    new UglifyJs()
  ]
};
