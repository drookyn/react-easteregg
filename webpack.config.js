const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: 'example/index.html',
  filename: './index.html',
});

module.exports = {
  entry: './example/index.js',
  output: {
    path: path.resolve(__dirname, '/example'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './example',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [htmlPlugin],
};
