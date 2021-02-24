const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {

    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'dev.js',
        path: path.resolve(__dirname, '../', 'build'),
    },
    devServer: {
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template/template.html'

        }),
        new CleanWebpackPlugin(),
    ]


}