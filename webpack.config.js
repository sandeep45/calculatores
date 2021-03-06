var webpack = require("webpack");
var path = require("path");


const definePlugin = new webpack.DefinePlugin({
  TIMEOUT: JSON.stringify("100000")
});


module.exports = {
  devtool: "eval-source-map",
  entry: {
    app: "./src/js/index.js"
  },
  output: {
    path: "./dist",
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    proxy: {
      '/phone_number*': {
        target: 'http://localhost:3000'
      },
      '/user*': {
        target: 'http://localhost:3000'
      }
    }
  },
  plugins: [
    definePlugin,
    new webpack.IgnorePlugin(/cptable/)
  ],
  module: {
    loaders: [
      {
        test: /.css$/,
        loader: "style!css"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "react-hot"
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ["es2015", "react", "stage-1"]
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
      },
      {
        test: require.resolve("jquery"),
        loader: 'expose?$',
      },
      {
        test: require.resolve("jquery"),
        loader: "expose?jQuery"
      },
      // {
      //   test: require.resolve("underscore"),
      //   loader: "expose?_"
      // },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee'],
    root: [
      path.resolve(__dirname, './src'),
    ]
  },
};