// Create a new 'render' controller method
exports.render = function (req, res) {
    console.log("User Logged in ", req.user)
	res.render('index', {
		title: 'Hello World',
		userFullName: req.user ?  req.user.username : ''
	});
};
