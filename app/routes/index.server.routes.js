module.exports = function (app) {
    // Load controller
    var index = require('../controllers/index.server.controller');
    
    app.get('/', function (req, res) {
        // Display index
        res.render('index');
    });
    app.get('/', (req, resp) => {
    	resp.render("home.ejs");
    })

};
