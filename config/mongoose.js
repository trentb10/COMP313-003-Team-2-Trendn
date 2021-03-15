// load the module dependencies
const config = require('./config');
const mongoose = require('mongoose');

// define the mongoose configuration method
module.exports = function() {
	// use mongoose to connect to mongodb
	//const db = mongoose.connect(config.db);
	const db = mongoose.connect(config.db, {
		useunifiedtopology: true,
		usenewurlparser: true, usecreateindex: true 
		}).then(() => console.log('db connected!'))
		.catch(err => {
		console.log('error');
		});

	// load the model 
	require('../app/models/user.server.model');
	require('../app/models/fashionpost.server.model');

	// return the mongoose connection instance
	return db;
};
