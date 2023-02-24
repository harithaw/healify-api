const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    oNIC:{
        type: String,
        required:true,
        unique: true,
    },
    oName:{
        type: String,
        required:true,
    },
    oAddress:{
        type: String,
        required:true,
    },
    oPhone:{
        type: String,
        required:true,
    },
    oEmail:{
        type: String,
        required:true,
    },
},{timestamps:true});

module.exports = mongoose.model('Owner',ownerSchema);