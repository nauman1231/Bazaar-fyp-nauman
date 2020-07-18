var mongoose = require('mongoose');

var product_schema = new mongoose.Schema({


    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
           required:true
    },
    size: {
        type: String,
        required: true,
    },

    brand: {
        type: String,
        required: true,
    },
    product_per_carton: {
        type: String,
        required: true,
    },
    number_of_carton: {
        type: String,
        required: true,
    },
    Seller_price: {
        type: String,
        required: true,
    },
    Retail_price: {
        type: String,
        required: true,
    },

    details: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },



});


var product = mongoose.model('products', product_schema);

module.exports = product;

