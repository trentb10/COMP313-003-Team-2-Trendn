var FashionPost = require('mongoose').model('Fashion');

// Create a new 'render' controller method
exports.render = function (req, res) {
    console.log("User Logged in ", req.user)
	res.render('index', {
		userFullName: req.user ?  req.user.username : ''
	});
};


exports.home = function(req,res) {
    console.log("home page")
    //filter the top fashion post and display it 
	res.render('home', {
		userFullName: req.user ?  req.user.username : ''
	});
};

exports.renderUploadForm = function(req,res) {
    res.render('upload-fashion-post', { userFullName: req.user ? req.user.username : ' '});
};

exports.uploadForm = function(req,res) {
    console.log(" Category : ",req.body.category);
    const fashion = FashionPost(req.body);
    console.log(" Price : ",fashion.rating);
    fashion.save();

    FashionPost.find({}, (err ,list) => {
        console.log(list[0])
        res.render("home", {"post": list, "userFullName": req.user ? req.user.username : ' '} );
    });
};

