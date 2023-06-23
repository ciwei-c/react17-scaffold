const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common.js")

module.exports = merge(commonConfig, {
  entry: './src/index.tsx',
  mode: "development",
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../public'),
    },
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
});