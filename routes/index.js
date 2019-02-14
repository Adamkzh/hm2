var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");
/*
  * GET home page.
  */
const user = {email: "test@gmail.com"};
router.get('/', ctrlMain.index);

module.exports = router;


//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('page/index', { user: user });
// });
//
// module.exports = router;
