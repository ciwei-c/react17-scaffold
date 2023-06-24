const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common.js")
const mode = "development"

module.exports = merge(commonConfig, {
  entry: './src/index.tsx',
  mode,
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
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: mode,
        BASE_URL: "/rs"
      })
    })
  ]
});