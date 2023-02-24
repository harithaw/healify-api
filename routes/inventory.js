const express = require('express')

const {
    getInventories,
    getInventory,
    createInventory,
    deleteInventory,
    updateInventory
} = require('../controller/InventoryController.js')


const router = express.Router()

//get all inventories
router.get('/all',getInventories)

//get inventory
router.get('/:mName',getInventory)

//create inventory
router.post('/add',createInventory)

//update inventory
router.patch('/update/:mName',updateInventory)

//delete inventory
router.delete('/delete/:mName',deleteInventory)

module.exports=router;