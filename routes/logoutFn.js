module.exports = async (req, res) => {
    // req.session.username = null;
    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
};