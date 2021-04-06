/* 
    webpack.config.js   webpack的配置文件
     作用: 指示 webpack 干哪些活(当你运行 webpack 指令时,会加载里面的配置)
     
     所有构建工具都是基于nodejs平台运行的——模块化默认采用commonjs模块机制
    
    src是项目目录，采用ES6模块化的方式
    而webpack.config.js采用的是commonJS的模块化方式
*/

// commonjs通过以下方式

// resolve用来拼接绝对路径的方法(处理绝对路径的方法)
const { resolve } = require('path')

// 通过下面module.exports来暴露对象
module.exports = {
    // webpack配置
    // 入口起点
    entry: './src/index.js',
    // 输出
    output: {
        // 输出文件名
        filename: 'built.js',
        // 输出路径
        // __dirname nodejs的变量，代表当前文件的目录绝对路径
        path: resolve(__dirname, 'build')
    },
    // loader的配置
    module: {
        rules: [
            // 去写详细loder配置
            {
                // 匹配哪些文件
                test: /\.css$/,
                /*
                    use就是使用哪些loader进行处理
                    use数组中loader执行顺序： 从右到左， 从下到上， 依次执行
                */
                use: [
                    // 创建style标签，将js中的样式资源插入进去，添加到head中生效
                    'style-loader',
                    // 将css文件变成commonjs模块加载到js中，里面内容是样式字符串
                    'css-loader'
                ]
            }
        ]
    },

    // plugins的配置(插件的配置)
    plugins: [
        //详细plugins的配置 
    ],

    // 模式(开发环境)
    mode: 'development', 
    // mode: 'production'

}