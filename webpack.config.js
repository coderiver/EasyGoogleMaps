var webpack = require('webpack');
var minimize = process.argv.indexOf('--no-minimize') === -1 ? true : false;
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var plugins = minimize ? [
new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  compress: {
    drop_console: true
  },
}),
new webpack.optimize.MinChunkSizePlugin({minChunkSize: '100000'}),
new BundleAnalyzerPlugin( {
  analyzerMode: 'static',
  analyzerPort: 4000,
          openAnalyzer: false
  }
)
] : [
new webpack.optimize.MinChunkSizePlugin({minChunkSize: '100000'})
];

module.exports = {
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  entry: {
    'dist/easygooglemaps':'./src/easygooglemaps.js'
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
    },{
    test: /\.json$/,
    loader: 'json'
      }]
  },
  plugins: plugins
};
