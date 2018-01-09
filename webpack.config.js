const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/router.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 8080,
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
};
