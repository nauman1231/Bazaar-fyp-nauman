var mongoose = require('mongoose');

var category_schema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
        unique: true

    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

    },
    image: {
        type: String,
        required: true,
    }
    

});



var category = mongoose.model('categorys', category_schema);

module.exports = category;

