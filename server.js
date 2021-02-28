// Set 'NODE_ENV' variable

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load express module

const configureExpress = require('./config/express');

// Crate new Express app instance

const app = configureExpress();

app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;
