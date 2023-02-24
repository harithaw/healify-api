const Medicine = require('../models/medicines.model')

//all medicines
const getMedicines = async(req,res)=>{
    const medicine =await Medicine.find({})

    res.status(200).json(medicine)
}


//get single medicine by mNDC
const getMedicine = async(req,res)=>{
    const {mNDC} = req.params

    const medicine = await Medicine.find({mNDC:mNDC})

    if(!medicine){
        return res.status(404).json({error:'Medicine not found'})
    }

    res.status(200).json(medicine)
}

//create new medicine
const createMedicine = async(req,res)=>{
    const {mNDC,mName} = req.body;

    // add new medicine doc to db
    try{
        const medicine = await Medicine.create({mNDC,mName})
        res.status(200).json(medicine)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


//update medicine by NDC
const updateMedicine = async(req,res)=>{
    const {mNDC} = req.params

    const medicine = await Medicine.findOneAndUpdate({mNDC:mNDC},{
        ...req.body
    })

    if (!medicine){
        return res.status(404).json({error:'No such medicine'})
    }

    res.status(200).json(medicine)
}

//delete medicine by mNDC
const deleteMedicine = async(req,res)=>{
    const {mNDC} = req.params

    const medicine = await Medicine.findOneAndDelete({mNDC: mNDC})

    if (!medicine){
        return res.status(400).json({error: 'No such medicine'})
    }

    res.status(200).json(medicine)
}

module.exports={
    getMedicines,
    getMedicine,
    createMedicine,
    updateMedicine,
    deleteMedicine
}