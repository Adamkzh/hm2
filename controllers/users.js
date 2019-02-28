
var exports = module.exports = {};

// Display index page on GET.
exports.getSignInForm = function (req, res) {
    res.render('page/signin', {user: null});
};

exports.signin = function(req, res) {
    var email, password;
    if (req.body.signin_email != null) {
        email = req.body.signin_email;
    }
    if (req.body.signin_password != null) {
        password = req.body.signin_password;
    }
    res.send("email: " + email + " info saved");
};

exports.signup = function (req, res) {
    var name, email, password, repeatPassword;
    console.log(req.body);

    if (req.body.signup_name != null) {
        name = req.body.signup_name;
    }
    if (req.body.signup_email != null) {
        email = req.body.signup_email;
    }
    if (req.body.password != null) {
        password = req.body.password;
    }
    if (req.body.repeat_password != null) {
        repeatPassword = req.body.repeat_password;
    }
    res.send("" + name + " " + email + " saved.");
};