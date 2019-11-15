const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(session({
    secret: '2019-11-15'
}));

// 连接数据库
require('./model/connect');
// 集合对象
const User = require('./model/user');

/* User.create({
    username: 'ifer',
    password: 'aaa'
}).then(res => console.log(res)).catch(err => console.log(err)); */

app.post('/login', async (req, res) => {
    // Step1: 查询用户是否存在
    const {
        username,
        password
    } = req.body;
    const user = await User.findOne({
        username
    });
    if (user) {
        // 用户存在，并且查询到用户的密码和提交的密码一致，则登录成功
        if (user.password === password) {
            req.session.username = username;
        } else {
            // 用户名或密码错误
        }
    } else {

    }

    res.send(user);
});


app.get('/user', (req, res) => {
    let str = '';
    if (req.session.username) {
        str = '欢迎访问用户中心~'
    } else {
        str = '您还未登录';
    }
    res.send(str);
});

app.listen(3000, () => {
    console.log('服务器运行成功：http://localhost:3000');
});