const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return{
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js'
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                    type: 'asset/inline',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new CleanWebpackPlugin(),
        ],
        devServer: {
            static: path.join(__dirname, 'dist'),
            port: 3000,
            open: true,
            hot: true,
        },
        devtool: isProd ? 'source-map' : 'inline-source-map',
    };
}