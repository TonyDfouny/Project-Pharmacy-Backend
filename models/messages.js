const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const messageSchema = new Schema({
    firstname: {
        type: String,
          default: ''
      },
    lastname: {
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
    contactmethode:{
        type:String,
        required:true
    },
    message: {
        type: String,
        required: true,
    },
    date:{
        type:String,
        required: true
    },
    id:{
        type:Number,
        required:true,
        unique:true
    },
}, {
    timestamps: true
});


var Messages = mongoose.model('Messages', messageSchema);

module.exports = Messages;