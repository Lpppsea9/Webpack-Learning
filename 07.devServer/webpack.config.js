const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'output.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                exclude: /\.(css|js|html|less)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',

    // 开发服务器 devServer: 用来自动化(自动编译, 自动打开浏览器, 自动刷新浏览器~~)
    // 特点: 只会在内存中编译打包, 不会有任何输出
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3000
    }
}