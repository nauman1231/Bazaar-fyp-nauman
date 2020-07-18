var mongoose = require('mongoose');

var request_schema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    }
});



var request = mongoose.model('requests', request_schema);

module.exports = request;

