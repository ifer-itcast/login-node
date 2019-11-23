module.exports = async (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        // res.redirect('/'); // 之所以这样也可以跳转到登录页，是路由拦截中间件的功能
        res.redirect('/login');
    });
};