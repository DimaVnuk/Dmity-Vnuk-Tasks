const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/template.html"), 
      filename: "index.html", 
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
        { test: /\.svg$/, use: 'svg-inline-loader' },
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
        { test: /\.(js)$/, use: 'babel-loader' }
      ]
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};
