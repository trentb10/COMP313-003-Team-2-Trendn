// Load the 'index' controller
const index = require('../controllers/index.server.controller');

// Define the routes module' method
module.exports = function(app) {
    app.get('/', index.render);

    app.get('/home', index.home);

    app.get('/upload', index.renderUploadForm);

    app.post('/upload', index.uploadForm);

};
