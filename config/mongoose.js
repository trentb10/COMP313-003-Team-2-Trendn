// Load the module dependencies
const config = require('./config');
const mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	console.log("connecting to db ")
	const db = mongoose.connect(config.db, {
		useUnifiedTopology: true,
		useNewUrlParser: true, useCreateIndex: true 
		}).then(() => console.log('DB Connected!, ', config.db))
		.catch(err => {
		console.log('Error');
		});

	// Load the database models
	require('../app/models/user.server.models');

	// Return the Mongoose connection instance
	return db;
};