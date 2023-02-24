const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    mName:{
        type: String,
        required:true,
    },
    mNDC:{
        type: String,
        required:true,
        unique: true,
    },
},{timestamps:true});

module.exports = mongoose.model('Medicine',medicineSchema);