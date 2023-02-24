const express = require('express')

const {
    getMedicines,
    getMedicine,
    createMedicine,
    updateMedicine,
    deleteMedicine
} = require('../controller/MedicineController')

const router = express.Router()

//get all medicines
router.get('/all',getMedicines)

//get medicine by NDC
router.get('/:mNDC',getMedicine)

//create medicine
router.post('/add',createMedicine)

//update medicine
router.patch('/update/:mNDC',updateMedicine)

//delete medicine
router.delete('/delete/:mNDC',deleteMedicine)

module.exports=router;