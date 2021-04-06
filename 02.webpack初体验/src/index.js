/* 
    index.js: webpack入口起点文件

    1. 运行指令
        开发环境: webpack ./src/index.js -o ./build --mode=development
            webpack会以 ./src/index.js 为入口文件打包，打包后输出到 ./build/built.js
            整体打包环境, 是开发环境
        生产环境: webpack ./src/index.js -o ./build --mode=production
            webpack会以 ./src/index.js 为入口文件打包，打包后输出到 ./build/built.js
            整体打包环境, 是生产环境

    2.  结论
        1. webpack能处理js/json资源, ! 不能处理css/img等其他资源
        2. 生产环境和开发环境将ES6 module(模块化)编译成浏览器能识别的module
        3. 生产环境比开发环境多一个压缩js代码
*/

// 引入css文件,不能处理
// import './index.css'

// 引入json文件
import data from './data.json'

console.log(data);

function add(x, y) {
    return x + y;
}

console.log(add(1,2));