const mongoose = require('mongoose');

// 集合规则
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

// 创建集合
const User = mongoose.model('User', userSchema);

/* const {makeSecret} = require('../utils/hash');
makeSecret('aaa').then(password => {
    User.create({
        username: 'ifer',
        password
    }).then(res => console.log(res)).catch(err => console.log(err));
}); */

module.exports = User;