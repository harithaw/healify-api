const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    mNDC:{
        type: String,
    },
    pId:{
        type: Number,
    },
    mId:{
        type: Number,
    },
    mName:{
        type: String,
    },
    mQuantity:{
        type: Number,
    },
    mSupplier:{
        type: String,
    },
    mManufacture:{
        type: String,
    },
    mPrice:{
        type: Number,
    },
    mExpDate:{
        type: Date,
    },
},{timestamps:true});

module.exports = mongoose.model('Inventory',inventorySchema);