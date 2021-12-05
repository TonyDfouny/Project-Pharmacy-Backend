const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const CategorySchema = new Schema({
    description: {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
});


const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    category:CategorySchema,
    
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
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
        min: 1,
        required: true
    },
}, {
    timestamps: true
});




var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;