var mongoose           =require('mongoose');
var consumerSchema     =require("./consumer_model");
var retailerSchema     =require("./retailer_model");
var delivererSchema    =require("./deliverer_model");
var shoppingCartSchema =require("./shoppingCart_model");

var order_schema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
        unique: true
    },
    consumer: {
        // type: consumerSchema,
        type: String,
        required: true
    },

    retailer: {
        // type: retailerSchema,
        type: String,
        required: true
    },
    deliverer: {
       // type: delivererSchema,
        type: String,
        required: true
    },
    cart: {
       // type: shoppingCartSchema,
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    orderPlaced: {
        type: Date,
        required: true
    },
    orderDelivererd: {
        type: Date,
        required: true
    }


});





var order = mongoose.model('orders', order_schema);

module.exports = order;

