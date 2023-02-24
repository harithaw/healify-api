const Inventory = require('../models/inventory.model.js')

//all inventory
const getInventories = async(req,res)=>{
    const inventory =await Inventory.find({})
    res.status(200).json(inventory)
}


//get single inventory
const getInventory = async(req,res)=>{
    const {mName} = req.params

    const inventory = await Inventory.find({mName:mName})

    if(!inventory){
        return res.status(404).json({error:'Inventory not found'})
    }

    res.status(200).json(inventory)
}

//create new inventory

const createInventory = async(req,res)=>{

    const {mNDC, pId, mId, mName, mQuantity, mSupplier, mManufacture, mPrice, mExpDate} = req.body 

    // add new inventory doc to db
    try{
        const inventory = await Inventory.create({mNDC, pId, mId, mName, mQuantity, mSupplier, mManufacture, mPrice, mExpDate})
        res.status(200).json(inventory)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


//update inventory
const updateInventory = async(req,res)=>{
    const {mName} = req.params

    const inventory = await Admin.findOneAndUpdate({mName:mName},{
        ...req.body
    })

    if (!inventory){
        return res.status(404).json({error:'No such inventory'})
    }

    res.status(200).json(inventory)
}

//delete inventory
const deleteInventory = async(req,res)=>{
    const {mName} = req.params

    const inventory = await Inventory.findOneAndDelete({mName: mName})

    if (!inventory){
        return res.status(400).json({error: 'No such inventory'})
    }

    res.status(200).json(inventory)
}

module.exports={
    getInventories,
    getInventory,
    createInventory,
    deleteInventory,
    updateInventory
}