
var mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
var consumer_schema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,

    },
    // password : {
    //     type: String,
    //     required: true,
    // },
    // city: {
    //     type: String,
    //     required: true,

    // },
    address: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,

    },
    lng:{
      type:Number
    },
    lat:{
      type:Number
    },
  
    // location: {
    //     type: String,
    //     required: true,
    // },
    // verified: {                 //check kro
    //     type: Boolean,
    //     required: true,

    // },
    // photo:{
    //     type:String
    // },
    hash: String,
    salt: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date
});


consumer_schema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  };
  
  consumer_schema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
  };
  
  consumer_schema.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
  
    return jwt.sign({
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
  }
  
  consumer_schema.methods.toAuthJSON = function() {
    return {
      _id: this._id,
      email: this.email,
      token: this.generateJWT(),
      store:this.stores,
    };
  };

var consumer = mongoose.model('consumers', consumer_schema);

module.exports = consumer;

