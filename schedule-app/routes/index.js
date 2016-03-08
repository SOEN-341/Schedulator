var express = require('express');
var passport = require('passport');

var router = express.Router();

/* GET home page. (with login section) */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

//process login form
router.post('/', passport.authenticate('local'), function(req, res){
	res.redirect('/account');
});


/* GET account page. (after login) 
 * Protected section, must be logged in to access
 */
router.get('/account', function(req, res){
	res.render('account', {
		isAuthenticated: req.isAuthenticated(),
		user : req.user 			// get user out of session and pass to template
	});
});



/* GET user setting page. */
router.get('/setting', function(req, res, next) {
  res.render('setting', {});
});

/* GET signup page. */
router.get('/signup', function(req, res, next){
	res.render('signup', {});
});

//process signup form
//app.post('/signup', passport work here);

//logout handled by passport
router.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});

//route middleware to check if user is logged in
/*
function isLoggedIn(req, res, next){
	
	//if user is authenticated, continue
	if(req.isAuthenticated())
		return next();
	
	//if user is not authenticated
	res.redirect('/');
}
*/

module.exports = router;