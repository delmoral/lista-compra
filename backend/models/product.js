const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: { type: String, required: true},
    price: Number,
    shop: Schema.Types.ObjectId,
    imagePath: String
});

module.exports =  mongoose.model('Product', ProductSchema);