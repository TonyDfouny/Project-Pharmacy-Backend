const mongoose = require('mongoose');
const { Number } = require('mongoose/lib/schema/index');
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
    
    name: {
        type: String,
        //required: true,
        unique: true
    },
    image: {
        type: String,
        //required: false
    },
    category:{
        //type: mongoose.Schema.Types.ObjectId,
        //ref: 'categorySchema'
        type:String
    },

    label: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        //required: true,
        min: 0.0
    },
    description: {
        type: String,
        //required: true
    },
    application: {
        type: String,
        //required:true      
    },
    quantity:  {
        type: Number,
        min: 0,
        //required: true
    },
}, {
    timestamps: true
});


/*productSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) { }
  });

  productSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        //delete ret._id;
        //delete ret.__v;
    }
});*/
var Products = mongoose.model('Product', productSchema);

module.exports = Products;