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
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[ 'style-loader', 'css-loader'],

                test: /\.(scss|sass)$/,
                use: ['style-loader', 'sass-loader']
            },  

        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template/template.html'

        }),
        new CleanWebpackPlugin(),
    ]


}