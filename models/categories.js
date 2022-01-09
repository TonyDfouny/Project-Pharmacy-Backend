const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const categorySchema = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    description: {
        type: String,
        required: true,
        
    },
}, {
    timestamps: true
});


var Categories = mongoose.model('Categories', categorySchema);

module.exports = Categories;