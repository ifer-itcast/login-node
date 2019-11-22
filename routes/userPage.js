module.exports = (req, res, next) => {
    res.render('user', {
        username: req.session.username
    });
};