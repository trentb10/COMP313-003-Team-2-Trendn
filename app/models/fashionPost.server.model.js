// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'UserSchema'
const FashionSchema= new Schema({
    category: {
        type: String,
        enum: ['men', 'women','kids'],
        default: 'men'
    },
    price: Number,
    brand: String,
    style: String,
    quantity: Number,
    rating: Number,
    size : {
        type: String,
        enum: ['S','M','L','XL']
    },
    reviews: String,
    //TODO: store  a image 
});

UserSchema.statics.findUniqueUsername = function (username, suffix, callback) { // find an available unique username for new users
	var _this = this;
	var possibleUsername = username + (suffix || '');
	_this.findOne({
		username: possibleUsername
	}, function (err, user) {
		if (!err) {
			if (!user) {
				callback(possibleUsername);
			} else {
				return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
			}
		} else {
			callback(null);
		}
	});
};

	

// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
UserSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

// Create the 'User' model out of the 'UserSchema'
mongoose.model('User', UserSchema);
