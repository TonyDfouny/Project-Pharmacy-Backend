var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  firstName: {
    type: String,
    
  },
  lastName: {
    type: String,
    
  },
  password: {
    type: String
    
  },
  email: {
    type: String
    
  },
  dateOfBirth: {
    type: String
    
  },
  telnum:{
    type:String
  },
  dateOfDelete: {
    type: String,
    default:'null'
  },
  type:   {
    type: Number
    
    }
});

var Users = mongoose.model('User', userSchema);

module.exports = Users;