/**
 * Created by juanchen on 2/14/19.
 */
/*
  * GET home page.
  */

module.exports.index = function(req, res)
{
    const user = {email: "test@test.com"};
    res.render('page/index', { user: user });
};

