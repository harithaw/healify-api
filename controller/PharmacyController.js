const Pharmacy = require('../models/pharmacies.model.js')

//all pharmacies
const getPharmacies = async(req,res)=>{
    const pharmacy =await Pharmacy.find({})

    res.status(200).json(pharmacy)
}


//get single pharmacy by ID
const getPharmacy = async(req,res)=>{
    const {pId} = req.params

    const pharmacy = await Pharmacy.find({pId:pId})

    if(!pharmacy){
        return res.status(404).json({error:'Pharmacy not found'})
    }

    res.status(200).json(pharmacy)
}

//create new pharmacy
const createPharmacy = async(req,res)=>{
    const {pId, pName, pEmail, pPassword, pAdress, pPhone, pLicense, pOwner, pWebsite, pOperating, pStatus} = req.body;

    // add new pharmacy doc to db
    try{
        const pharmacy = await Pharmacy.create({pId, pName, pEmail, pPassword, pAdress, pPhone, pLicense, pOwner, pWebsite, pOperating, pStatus})
        res.status(200).json(pharmacy)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


//update pharmacy by ID
const updatePharmacy = async(req,res)=>{
    const {pId} = req.params

    const pharmacy = await Pharmacy.findOneAndUpdate({pId:pId},{
        ...req.body
    })

    if (!pharmacy){
        return res.status(404).json({error:'No such pharmacy!'})
    }

    res.status(200).json(pharmacy)
}

//delete pharmacy by ID
const deletePharmacy = async(req,res)=>{
    const {pId} = req.params

    const pharmacy = await Pharmacy.findOneAndDelete({pId: pId})

    if (!pharmacy){
        return res.status(400).json({error: 'No such pharmacy!'})
    }

    res.status(200).json(pharmacy)
}

module.exports={
    getPharmacies,
    getPharmacy,
    createPharmacy,
    updatePharmacy,
    deletePharmacy
}