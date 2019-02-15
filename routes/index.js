var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");
/*
  * GET home page.
  */
router.get('/', ctrlMain.index);

router.post('/search', ctrlMain.search)

module.exports = router;


//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('page/index', { user: user });
// });
//
// module.exports = router;
