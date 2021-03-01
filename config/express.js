// Load the module dependencies
const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');

// Define the Express configuration method
module.exports = function () {
    // Create a new Express application instance
    const app = express();

    // Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    // Use the 'body-parser' and 'method-override' middleware functions
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    // Configure the 'session' middleware
    app.use(session({
        //a session is uninitialized when it is new but not modified
        //force a session that is "uninitialized" to be saved to the store
        saveUninitialized: true,
        //forces the session to be saved back to the session store
        //even if the session was never modified during the request
        resave: true,
        secret: config.sessionSecret // secret used to sign the session ID cookie
    }));

 passport.serializeUser(function(user, done) {
      done(null, user.id);
  });

    passport.deserializeUser(function(id, done) {
const User =  require('mongoose').model('User');
      User.findById(id, function(err, user) {
        done(err, user);
    });
  });    
    app.use(passport.initialize());
    app.use(passport.session());
    require('./strategies/local.js')(); //include the local strategy config file

    // Set the application view engine and 'views' folder
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    // Load the 'index' routing file
    require('../app/routes/index.server.routes.js')(app);

    // Configure static file serving
    app.use(express.static('./public'));

    // Return the Express application instance
    return app;
};