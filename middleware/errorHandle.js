module.exports = (err, req, res, next) => {
    res.send(err.message);
};