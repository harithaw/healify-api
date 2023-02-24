const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pharmacySchema = new Schema({
    pId:{
        type: Number,
        required:true,
        unique: true,
    },
    pName:{
        type: String,
        required:true,
    },
    pEmail:{
        type: String,
        required:true,
    },
    pPassword:{
        type: String,
        required:true,
    },
    pAdress:{
        type: String,
        required:true,
    },
    pPhone:{
        type: String,
        required:true,
    },
    pLicense:{
        type: String,
        required:true,
    },
    pWebsite:{
        type: String,
    },
    pOperating:{
        type: String,
    },
},{timestamps:true});

module.exports = mongoose.model('Pharmacy',pharmacySchema);