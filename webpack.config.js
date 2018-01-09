const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/router.ts',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 8080,
    noInfo: true,
    stats: 'minimal',
    host: '0.0.0.0',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Typescript Template',
      template: 'src/assets/index.ejs',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
