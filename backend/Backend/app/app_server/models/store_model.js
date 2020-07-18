var mongoose = require('mongoose');

var store_schema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }

});



var store = mongoose.model('stores', store_schema);

module.exports = store;

