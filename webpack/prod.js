// import path from 'path';
import webpack from 'webpack';
//import CopyWebpackPlugin from 'copy-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import baseConfig from './base';

const config = {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    new MiniCssExtractPlugin({ filename: 'bundle.css' }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        // compress: false,
        // ecma: 6,
        // mangle: true
      },
      sourceMap: true
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
       {
        test: /\.js$/, // include .js files
        exclude: [/node_modules/, /src\/styles$/],
        use: [{
          loader: 'babel-loader',
          query: {
            plugins: [
              // Sem o AMD para usar widgets padrão OCC
              ['@babel/plugin-transform-modules-amd'],
              // ['@babel/plugin-transform-modules-commonjs', {loose: true, noInterop: true}],
              // ['@babel/plugin-proposal-class-properties']
            ],
            presets: ['@babel/preset-env']
          }
        }]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
};

export default config;
