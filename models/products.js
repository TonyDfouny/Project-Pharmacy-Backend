const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


/*const categorySchema = new Schema({
    description: {
        type: String,
        required: true,
        
    },
}, {
    timestamps: true
});*/


const productSchema = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: false
    },
    category:{
        type: Number,
        required:true
    },

    label: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        required: true,
        min: 0.0
    },
    description: {
        type: String,
        required: true
    },
    application: {
        type: String,
        required:true      
    },
    quantity:  {
        type: Number,
        min: 0,
        required: true
    },
}, {
    timestamps: true
});




var Products = mongoose.model('Product', productSchema);

module.exports = Products;