import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  entry: [
    path.join(__dirname, '../', 'src', 'js', 'app'),
  ],

  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: 'bundle.js',
    // publicPath: './',
  },

  resolve: {
    extensions: ['.js', '.scss', '.sass', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/, // include .js files
  //       exclude: [/node_modules/, /src\/styles$/],
  //       use: [{
  //         loader: 'babel-loader',
  //         query: {
  //           plugins: [
  //             // Sem o AMD para usar widgets padrão OCC
  //             ['@babel/plugin-transform-modules-amd'],
  //             // ['@babel/plugin-transform-modules-commonjs', {loose: true, noInterop: true}],
  //             // ['@babel/plugin-proposal-class-properties']
  //           ],
  //           presets: ['@babel/preset-env']
  //         }
  //       }]
  //     }
  //   ]
  // }
};

export default { ...config };
