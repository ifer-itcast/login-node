module.exports = (req, res, next) => {
    // req.url 这个地址应和用户登录时指定的 action 保持一致
    if (req.url !== '/login' && !req.session.username) {
        res.redirect('/login');
    } else {
        next();
    }
};