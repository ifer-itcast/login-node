const express = require('express');
const router = express.Router();

// 登录界面
router.get('/login', require('./loginPage'));

// 登录功能
router.post('/login', require('./loginFn'));

// 退出功能
router.get('/logout', require('./logoutFn'));

// 用户界面
router.get('/datum', require('./userPage'));

module.exports = router;