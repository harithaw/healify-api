const Admin = require('../models/inventory.model.js')

//all inventory
const getAdmins = async(req,res)=>{
    const admin =await Admin.find({})
    res.status(200).json(admin)
}


//get single admin
const getAdmin = async(req,res)=>{
    const {aEmail} = req.params

    const admin = await Admin.find({aEmail:aEmail})

    if(!admin){
        return res.status(404).json({error:'Admin not found'})
    }

    res.status(200).json(admin)
}

//create new admin

const createAdmin = async(req,res)=>{
    const Email = req.body.aEmail;
    const Password = req.body.aPassword;

    // add new admin doc to db
    try{
        const admin = await Admin.create({Email,Password})
        res.status(200).json(admin)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


//update admin
const updateAdmin = async(req,res)=>{
    const {aEmail} = req.params

    const admin = await Admin.findOneAndUpdate({aEmail:aEmail},{
        ...req.body
    })

    if (!admin){
        return res.status(404).json({error:'No such admin'})
    }

    res.status(200).json(admin)
}

//delete admin
const deleteAdmin = async(req,res)=>{
    const {aEmail} = req.params

    const admin = await Admin.findOneAndDelete({aEmail: aEmail})

    if (!admin){
        return res.status(400).json({error: 'No such admin'})
    }

    res.status(200).json(admin)
}

module.exports={
    getAdmins,
   getAdmin,
   createAdmin,
   updateAdmin,
   deleteAdmin
}