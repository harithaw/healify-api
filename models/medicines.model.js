const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    mNDC:{
        type: String,
        required:true,
        unique: true,
    },
    mName:{
        type: String,
        required:true,
    },
},{timestamps:true});

module.exports = mongoose.model('Medicine',medicineSchema);