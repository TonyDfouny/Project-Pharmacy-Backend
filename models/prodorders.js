const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const prodorderSchema = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    orderId:{
        type:Number,
        required:true,
        unique:true
    },
    productId:{
        type:Number,
        required:true,
        unique:true
    },
    productPrice:{
        type:Number,
        required:true,
        unique:true
    },
    quantity:{
        type:Number,
        required:true,
        unique:true
    },
}, {
    timestamps: true
});


var Prodorders = mongoose.model('Prodorders', prodorderSchema);

module.exports = Prodorders;
