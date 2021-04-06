const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                // 要使用多个loader处理use(所以放数组)
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                /*  问题: 默认处理不了html中img图片 */
                // 处理图片资源
                test: /\.(jpg|png|gif)$/,
                // 使用一个loader,直接写loader
                // 下载 url-loader file-loader(因为url依赖于file,所以下两个包)
                loader: 'url-loader',
                options: {
                    // 图片大小小于 10kb ，就会被base64处理,转换成字符串(压缩算法)
                    // 优点:减少请求数量(减轻服务器压力)
                    // 缺点: 图片体积更大(文件请求速度更慢)
                    limit: 10 * 1024,
                    // 问题: 因为url-loader默认使用es6模块化解析,而html-loader引入图片是commonjs
                    // 解析时会出现问题: [object Module]
                    // 解决: 关闭url-loader的es6模块化,使用commonjs解析
                    // esModule: false,
                    // 给图片进行重命名 
                    // [hash:10]取图片的hash的前10位
                    // [ext]取文件原来扩展名(png就是png, jpg就是jpg)
                    name:'[hash:10].[ext]'
                }
            },
            {
                test: /\.html$/,
                // 处理html文件的img图片(负责引入img,从而能被url-loader进行处理)
                loader: 'html-loader',
                options: {
                    esModule: false
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}