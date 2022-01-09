const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const orderSchema = new Schema({
    
    userId:{
        type:String,

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
    contactMethode:{
        type:String,
        
    },
    addComments: {
        type: String,
        
    },
    date:{
        type:String,
        
    },
    totalPrice:{
        type:Number,
    },
}, {
    timestamps: true
});


var Orders = mongoose.model('Orders', orderSchema);

module.exports = Orders;
