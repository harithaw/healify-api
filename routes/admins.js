const express = require('express')

const {
    getAdmin,
    getAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin
} = require('../controller/AdminController.js')


const router = express.Router()

//get all admins
router.get('/all',getAdmins)

//get admin
router.get('/:aEmail',getAdmin)

//create admin
router.post('/add',createAdmin)

//update admin
router.patch('/update/:aEmail',updateAdmin)

//delete admin
router.delete('/delete/:aEmail',deleteAdmin)

module.exports=router;