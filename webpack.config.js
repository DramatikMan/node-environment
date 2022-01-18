const path = require('path');


module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            noEmit: false
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  // stats: 'summary'
}