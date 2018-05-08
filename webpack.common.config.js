const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.ts'
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                enforce: "pre", test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                exclude: /node_modules/,
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Argent Project',
            template: 'src/index.html',
            inlineSource: '.(js|css)$'
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false,
            watch: 'src',
            tsconfig: './tsconfig.json',
            tslint: './tslint.json',
        }),
        new CopyWebpackPlugin([
            {from:'src/assets/',to:'assets'}
        ]),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackInlineSourcePlugin()
    ]
};