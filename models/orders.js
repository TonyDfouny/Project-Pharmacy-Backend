const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const orderSchema = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    userId:{
        type:Number,

    },
    city: {
        type: String,
        
      },
    details: {
        type: String,
        
      },
    floor:   {
        type: Number
    },
    contactmethode:{
        type:String,
        required:true
    },
    addComments: {
        type: String,
        required: true,
    },
    date:{
        type:String,
        required: true
    },
    totalprice:{
        type:Number,
    },
}, {
    timestamps: true
});


var Orders = mongoose.model('Orders', orderSchema);

module.exports = Orders;
