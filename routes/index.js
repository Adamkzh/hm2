var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

// GET request to get index page.
router.get('/', ctrlMain.index);

// POST request to search addresses by keywords.
router.post('/search', ctrlMain.search);

// GET request to view last search result.
router.get('/search', ctrlMain.viewSearchPage);

module.exports = router;



//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('page/index', { user: user });
// });
//
// module.exports = router;
