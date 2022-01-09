const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const prodorderSchema = new Schema({
    
    orderId:{
        type:String,
        
    },
    productId:{
        type:String,
        
    },
    productPrice:{
        type:Number,
        
    },
    quantity:{
        type:Number,
        
    },
}, {
    timestamps: true
});


var Prodorders = mongoose.model('Prodorders', prodorderSchema);

module.exports = Prodorders;
