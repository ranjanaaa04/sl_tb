const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const itemSchema = new Schema({
    title: { type: String },
    description: { type: String },
    coverImg: { type: String },
    googleMapLink: { type: String },
});
 
const Item = mongoose.model('Item', itemSchema);
 
module.exports = Item;