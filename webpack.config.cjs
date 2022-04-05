const path = require('path');


module.exports = {
    entry: path.resolve(__dirname, './dist/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ],
    },
    optimization: {minimize: true},
}
