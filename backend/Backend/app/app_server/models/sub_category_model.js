var mongoose = require('mongoose');

var sub_category_schema = new mongoose.Schema({

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



var sub_category = mongoose.model('sub_categorys', sub_category_schema);

module.exports = sub_category;

