var mongoose = require('mongoose');

var admin_schema = new mongoose.Schema({

   
    email: {
        type: String,
     
    },
    password: {
        type: String,
      

    },
  
    

});



var admin = mongoose.model('admin', admin_schema);

module.exports = admin;
