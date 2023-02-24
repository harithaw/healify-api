const Owner = require('../models/owners.model.js')

//all owners
const getOwners = async(req,res)=>{
    const owner =await Owner.find({})
    res.status(200).json(owner)
}


//get single owner
const getOwner = async(req,res)=>{
    const {oNIC} = req.params

    const owner = await Owner.find({oNIC:oNIC})

    if(!owner){
        return res.status(404).json({error:'Owner not found'})
    }

    res.status(200).json(owner)
}

//create new owner
const createOwner = async(req,res)=>{

    const {oNIC,oName,oAddress,oPhone,oEmail} = req.body 

    // add new owner doc to db
    try{
        const owner = await Owner.create({oNIC,oName,oAddress,oPhone,oEmail})
        res.status(200).json(owner)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


//update owner
const updateOwner = async(req,res)=>{
    const {oNIC} = req.params

    const owner = await Owner.findOneAndUpdate({oNIC:oNIC},{
        ...req.body
    })

    if (!owner){
        return res.status(404).json({error:'No such owner'})
    }

    res.status(200).json(owner)
}

//delete owner
const deleteOwner = async(req,res)=>{
    const {oNIC} = req.params

    const owner = await Owner.findOneAndDelete({oNIC: oNIC})

    if (!owner){
        return res.status(400).json({error: 'No such owner'})
    }

    res.status(200).json(owner)
}

module.exports={
    getOwners,
    getOwner,
    createOwner,
    deleteOwner,
    updateOwner
}