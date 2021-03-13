//const multer = require('multer');
//const upload = multer({dest: '../public/uploads/'});
const FashionPost = require('mongoose').model('Fashion');

// Create a new 'render' controller method
exports.render = function (req, res) {
    console.log("User Logged in ", req.user)
	res.render('index', {
		userFullName: req.user ?  req.user.username : ''
	});
};

exports.home = function(req,res) {
    FashionPost.find({}, (err ,list) => {
        console.log(list[0])
        res.render("home", {"post": list, "userFullName": req.user? req.user.username  : ' '} );
    });
};



exports.renderUploadForm = function(req,res) {
    res.render('upload-fashion-post', { userFullName: req.user ? req.user.username : ' '});
};

exports.uploadForm = function(req,res) {
    console.log("Req : " ,req );
    console.log(" Category : ",req.file);
    const fashion = FashionPost(req.body);
    fashion.img  = req.file.originalname;
    console.log("New Fashion Post", fashion);
    fashion.save();

    res.redirect('/home');
};

// 'read' controller method to display a task
exports.read = function(req, res) {
	// Use the 'response' object to send a JSON response
	res.json(req.fashion);
};
//update a survey by survey id
exports.deleteById =  function  (req, res) {  
    //initialize findOneAndUpdate method arguments
    var query = { _id :req.params.id };  

    // Use the 'survey' static 'findOneAndUpdate' method 
    // to update a specific survey by survey id
    FashionPost.remove(query, (err, fashion) => {
       if (err) {
            console.log(err);
            // Call the next middleware with an error message
            return next(err);
        } else {
            console.log(fashion);
            // Use the 'response' object to send a JSON response
            res.redirect('/home'); //display all surveys
        }
    })
};

exports.renderUpdate = function(req,res) {
    res.render('editpost', { userFullName: req.user ? req.user.username : ' '});
    FashionPost.find({}, (err ,list) => {
        console.log(list[0])
        res.render("editpost", {"post": list, "userFullName": req.user? req.user.username  : ' '} );
    });
};

exports.update = function(req,res) {

    console.log("Req : " ,req );
    console.log(" Category : ",req.file);
    const fashion = FashionPost(req.body);
    fashion.img  = req.file.originalname;
    console.log("New Fashion Post", fashion);
    fashion.save();

    res.redirect('/home');
};

