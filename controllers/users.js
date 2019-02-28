
var exports = module.exports = {};

// Display index page on GET.
exports.login = function (req, res) {
    res.render('page/login', {user: null});
};