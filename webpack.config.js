const path = require('path');

module.exports = {
  context: './src',
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[chunkhash].js',
  },
  module: {
    rules: [{ test: /.jsx?$/, use: 'babel-loader' }],
  },
};
