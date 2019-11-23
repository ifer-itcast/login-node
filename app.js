const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs'); // 指定模板引擎
app.use(express.static('public')); // 开启静态资源服务器
app.use(bodyParser.urlencoded({
    extended: false
})); // 解析 POST 数据

// ...................cookie session 配置开始...................
app.use(require('./middleware/sessionHandle')());
// ...................cookie session 配置结束...................

require('./model/connect'); // 连接数据库

// ...................登录拦截开始...................
app.use(require('./middleware/loginGuard'));
// ...................登录拦截结束...................


// ...................页面路由开始...................
app.use(require('./routes'));
// ...................页面路由结束...................


// ...................错误处理开始...................
app.use(require('./middleware/errorHandle'));
// ...................错误处理结束...................

app.listen(3000, () => console.log('服务器运行成功：http://localhost:3000'));