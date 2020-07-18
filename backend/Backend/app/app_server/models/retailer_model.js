var mongoose = require('mongoose');

var retailer_schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true

    },
    cnic: {
        type: String,
        required: true,
        unique: true

    },
    stores: [{
        type: Object,
        required: true,

    }],
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,

    },
    address: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,

    },
    loggedInStatus: {
        type: Boolean,
        required: true,
    },
    verified: {
        type: Boolean,
        required: true,

    },
});


var retailer = mongoose.model('retailers', retailer_schema);

module.exports = retailer;

