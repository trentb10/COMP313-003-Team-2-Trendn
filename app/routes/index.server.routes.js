const multer = require('multer');
//const upload = multer({dest: 'public/uploads/', rename:});
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
            cb(null, 'public/uploads/')
        },
    filename: function (req, file, cb) {
            cb(null, file.originalname)
      }
});

var upload = multer({ storage: storage })

// Load the 'index' controller
const index = require('../controllers/index.server.controller');

// Define the routes module' method
module.exports = function(app) {
    app.get('/', index.render);

    app.get('/home', index.home);

    app.get('/upload', index.renderUploadForm);

    app.post('/upload', upload.single('img') ,index.uploadForm);

};
