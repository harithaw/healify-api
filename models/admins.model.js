const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    aEmail:{
        type: String,
        required:true,
        unique: true,
    },
    aPassword:{
        type: String,
        required:true,
    },
},{timestamps:true});

module.exports = mongoose.model('Admin',adminSchema);