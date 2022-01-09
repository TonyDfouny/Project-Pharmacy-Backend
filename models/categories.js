const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const categorySchema = new Schema({
    description: {
        type: String,
        //required: true,
        
    },
}, {
    timestamps: true
});
/*
categorySchema.method('toClient', function() {
    var obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});*/

/*categorySchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {     }
  });

categorySchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        //delete ret._id;
        //delete ret.__v;
    }
});*/
var Categories = mongoose.model('Categories', categorySchema);

module.exports = Categories;