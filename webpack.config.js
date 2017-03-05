var webpack = require('webpack');
var minimize = process.argv.indexOf('--no-minimize') === -1 ? true : false;
var plugins = minimize ? [new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  compress: {
    drop_console: true
  },
}),new webpack.optimize.MinChunkSizePlugin({minChunkSize: '100000'})] : [new webpack.optimize.MinChunkSizePlugin({minChunkSize: '100000'})];

module.exports = {
  entry: {
    'dist/easygooglemaps':'./src/easygooglemaps.js',
    'dist/example':'./src/example.js'
  },
  output: {
    path: './',
    filename: minimize ? '[name].min.js' : '[name].js',
    libraryTarget: 'umd',
    library: 'EasyGoogleMaps'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  },
  plugins: plugins
};
