// 引入,需要打包的资源都要在index.js这个入口文件引入,不然是无法打包的
import '../css/iconfont.css';
import '../css/index.less';

function add(x, y) {
    return x + y;
}

console.log(add(1,2));