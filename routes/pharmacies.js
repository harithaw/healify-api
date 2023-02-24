const express = require('express')

const {
    getPharmacies,
    getPharmacy,
    createPharmacy,
    updatePharmacy,
    deletePharmacy
} = require('../controller/PharmacyController.js')


const router = express.Router()

//get all pharmacies
router.get('/all',getPharmacies)

//get a pharmacy
router.get('/:pId',getPharmacy)

//create pharmacy
router.post('/add',createPharmacy)

//update pharmacy
router.patch('/update/:pId',updatePharmacy)

//delete pharmacy
router.delete('/delete/:pId',deletePharmacy)

module.exports=router;