const User = require('../model/user');
const {
    compareSecret
} = require('../utils/hash');
module.exports = async (req, res) => {
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
        let isValid = compareSecret(password, user.password);
        if (isValid) {
            req.session.username = user.username;
            res.redirect('/datum');
        } else {
            // 用户名或密码错误
        }
    } else {

    }
};