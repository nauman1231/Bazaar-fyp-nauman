var mongoose = require('mongoose');

var shoppingCart_schema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
        unique: true

    },
    products: [{
        type: Object,
        required: true,
    }],
    
    quantity: [{
    type: Number,
    required: true,
}],
    dataAdded: {
    type: Date,
    required: true,
},

});

var shoppingCart = mongoose.model('shoppingCarts', shoppingCart_schema);

module.exports = shoppingCart;

