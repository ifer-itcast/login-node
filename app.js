const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.set('view engine', 'ejs'); // 指定模板引擎
app.use(express.static('public')); // 开启静态资源服务器
app.use(bodyParser.urlencoded({ extended: false })); // 解析 POST 数据

// ...................session 配置开始...................
app.use(session({
    secret: '2019-11-15',
    saveUninitialized: false, // 注意这里的登录页面要是通过模板引擎渲染的，而不是作为静态资源存在！未登录时不要生成 connect.id
    resave: false, // 是否每次请求都会重置session cookie的过期时间
    store: new MongoStore({
        url: 'mongodb://localhost:27017/login'
    })
}));
// ...................session 配置结束...................

require('./model/connect'); // 连接数据库

// ...................登录拦截开始...................
app.use((req, res, next) => {
    // req.url 这个地址应和用户登录时指定的 action 保持一致
    if (req.url !== '/login' && !req.session.username) {
        res.redirect('/login');
    } else {
        next();
    }
});
// ...................登录拦截结束...................


// ...................页面路由开始...................
app.use(require('./routes'));
// ...................页面路由结束...................


// ...................错误处理开始...................
app.use((err, req, res, next) => {
    res.send(err.message);
});
// ...................错误处理结束...................

app.listen(3000, () => console.log('服务器运行成功：http://localhost:3000'));