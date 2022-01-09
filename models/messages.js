const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const messageSchema = new Schema({
    firstName: {
        type: String,
          default: ''
      },
    lastName: {
        type: String,
          default: ''
      },
    telnum:  {
        type: Number,
        min: 0,
        required: true
    },
    email: {
        type: String,
          default: ''
      },
    flag:   {
        type: Boolean,
        default: false
    },
    contactMethode:{
        type:String,
        
    },
    message: {
        type: String,
        
    },
    date:{
        type:String,
        required: true
    },
    
}, {
    timestamps: true
});


var Messages = mongoose.model('Messages', messageSchema);

module.exports = Messages;