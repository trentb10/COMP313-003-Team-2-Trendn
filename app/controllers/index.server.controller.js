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

/*
    FashionPost.find({}, (err ,list) => {
        console.log(list[0])
        res.render("home", {"post": list, "userFullName": req.user ? req.user.username : ' '} );
    });
    */
};

