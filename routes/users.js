var express = require('express');
var router = express.Router();
var ctrlUsers = require("../controllers/users");

// GET request to get sign up and sign in page.
router.get('/signin', ctrlUsers.getSignInForm);


//POST request to sign up
router.post('/signup', ctrlUsers.signup);


router.post('/signin', ctrlUsers.signin);

module.exports = router;