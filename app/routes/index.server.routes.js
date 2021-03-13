const multer = require('multer');
const express = require('express');
const FashionPost = require('mongoose').model('Fashion');
const router = express.Router();

///route to handle delete
/*
router.delete('/:id',  (request, response) => {
     FashionPost.remove({Id:request.params.id});
    response.redirect('/home');
  });
  */


//const upload = multer({dest: 'public/uploads/', rename:});
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
            cb(null, 'public/uploads/')
        },
    filename: function (req, file, cb) {
            cb(null, file.originalname)
      }
});

var upload = multer({ storage: storage });
//load  'index' controller
const index = require('../controllers/index.server.controller');

// Define the routes module' method
module.exports = function(app) {
    app.get('/', index.render);

    app.get('/home', index.home);

    app.get('/upload', index.renderUploadForm);

    app.post('/upload',upload.single('img') ,index.uploadForm);

    app.get('/edit', index.renderUpdate);

    app.post('/edit',upload.single('img') ,index.update);

    // Set up the 'courses' parameterized routes
     app.post('/home/:id', index.deleteById)
    //.get(index.read)
    //.put(index.updateById)
      .post(index.deleteById);
};

// route that handles edit view
/*
router.get('/editpost/:id', async (request, response) => {
    let fashion = await FashionPost.findById(request.params.id);
    response.render('editpost', { fashion: fashion });
  });

  module.exports = router;*/