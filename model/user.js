const mongoose = require('mongoose');

// 集合规则
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

// 集合
const User = mongoose.model('User', userSchema);

module.exports = User;