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

// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
FashionSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

// Create the 'User' model out of the 'UserSchema'
mongoose.model('Fashion', FashionSchema);
