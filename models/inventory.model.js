const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    mNDC:{
        type: String,
        required:true,
    },
    pId:{
        type: Number,
        required:true,
    },
    mId:{
        type: Number,
        required: true,
    },
    mQuantity:{
        type: Number,
        required: true,
    },
    mSupplier:{
        type: String,
        required: true,
    },
    mManufacture:{
        type: String,
        required: true,
    },
    mPrice:{
        type: Number,
        required: true,
    },
    mExpDate:{
        type: Date,
        required: true,
    },
},{timestamps:true});

module.exports = mongoose.model('Inventory',inventorySchema);