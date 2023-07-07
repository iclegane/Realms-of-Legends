import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

const config: Configuration & { devServer?: DevServerConfiguration } = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(tsx?|ts)?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
                include: /src/,
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                issuer: /\.[jt]sx?$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            svgConfig: {
                                plugins: [
                                    {
                                        name: 'removeViewBox',
                                        active: false,
                                    },
                                ],
                            },
                        },
                    },
                    'url-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-import'),
                                    require('postcss-for'),
                                    require('postcss-custom-properties')({ preserve: false }),
                                    require('postcss-custom-media')({ preserve: false }),
                                    require('postcss-nested'),
                                    require('postcss-color-function'),
                                    require('autoprefixer')({
                                        overrideBrowserslist: ['last 2 versions', '> 1%', 'not ie < 11'],
                                        grid: true,
                                    }),
                                    require('postcss-calc'),
                                    require('postcss-discard-comments'),
                                    require('cssnano')({ preset: 'default' }),
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        port: 8080,
        historyApiFallback: true,
        hot: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        preferAbsolute: true,
        modules: ['node_modules'],
        mainFiles: ['index'],
        plugins: [new TsconfigPathsPlugin()],
    },
};

export default config;
