// Set 'NODE_ENV' variable

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configureMongoose = require('./config/mongoose');

// Load express module
const configureExpress = require('./config/express');

const db = configureMongoose();
// Crate new Express app instance
const app = configureExpress();

app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;
