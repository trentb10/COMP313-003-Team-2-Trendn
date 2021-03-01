const passport = require('passport');
const index = require('../controllers/index.server.controller');
const users= require('../controllers/user.server.controller');

module.exports = (app) => {
    // Load controller
    app.get('/', function (req, res) {
        // Display index
        res.render('index');
    });
    app.route('/sign-up')
    .get(users.renderSignup)
    .post(users.signup);

    app.route('/sign-in')
    .get(users.renderSignin)
    .post(passport.authenticate('local', {
    	successRedirect: '/',
    	failureRedirect: '/sign-in'
    }));
    app.get('/sign-out', users.signout);
};
