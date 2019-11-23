module.exports = (err, req, res, next) => {
    const errObj = JSON.parse(err);
    res.send(errObj.message);
};