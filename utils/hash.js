const crypto = require('bcrypt');

const makeSecret = async (con) => {
    // 撒把盐
    const salt = await crypto.genSalt(10);
    return await crypto.hash(con, salt);
};
const compareSecret = async (oldCon, newCon) => {
    return await crypto.compare(oldCon, newCon);
};

module.exports = {
    makeSecret,
    compareSecret
};