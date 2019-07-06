import webpack from 'webpack';
import baseConfig from './base';

const config = {
  ...baseConfig,

  entry: [
    'webpack-dev-server/client?http://localhost:8081/#/',
    ...baseConfig.entry
  ],

  output: {
    publicPath: '/',
  },

  devtool: '#inline-source-map',

  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },

  devtool: '#inline-source-map',

  devServer: {
    //quiet: true,
    https: true,
    hot: true,
    port: '8081',
    inline: true,
    historyApiFallback: true,
  }
}

export default config;
