const express = require('express')

const {
    getOwners,
    getOwner,
    createOwner,
    deleteOwner,
    updateOwner
} = require('../controller/OwnerController.js')


const router = express.Router()

//get all owners
router.get('/all',getOwners)

//get owner
router.get('/:oNIC',getOwner)

//create owner
router.post('/add',createOwner)

//update owner
router.patch('/update/:oNIC',updateOwner)

//delete owner
router.delete('/delete/:oNIC',deleteOwner)

module.exports=router;