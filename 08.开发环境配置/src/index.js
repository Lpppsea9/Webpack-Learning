// 引入,需要打包的资源都要在index.js这个入口文件引入,不然是无法打包的
import './iconfont.css';
import './index.less';

function add(x, y) {
    return x + y;
}

console.log(add(1,2));