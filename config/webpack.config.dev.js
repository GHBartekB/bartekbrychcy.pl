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
                use:['style-loader', 'css-loader'],
            },  
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader','sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {"targets": "defaults"}]],
                        plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-arrow-functions"]
                    }
                }
            }

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