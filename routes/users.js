var express = require('express');
var router = express.Router();
var ctrlUsers = require("../controllers/users");

// GET request to get index page.
router.get('/login', ctrlUsers.login);


module.exports = router;