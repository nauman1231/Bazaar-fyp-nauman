var mongoose = require('mongoose');

var payment_schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    amount: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});




var payment = mongoose.model('payments', payment_schema);

module.exports = payment;

