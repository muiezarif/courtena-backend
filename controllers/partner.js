import Partner from "../models/Partner.js"
export const createPartner = async (req,res,next) => {
    const newPartner = new Partner(req.body)
    try {
        const savedPartner = await newPartner.save()
        res.status(200).json({success:true,message:"Success",result:savedPartner, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
        // res.status(500).json(error)
    }
}

export const updatePartner = async (req,res,next) => {
    try {
        const updatedPartner = await Partner.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json({success:true,message:"Success",result:updatedPartner, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const deletePartner = async (req,res,next) => {
    try {
        await Partner.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,message:"Partner Deleted",result:{}, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getPartner = async (req,res,next) => {
    try {
        const partner = await Partner.findById(req.params.id)
        res.status(200).json({success:true,message:"Success",result:partner, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAllPartners = async (req,res,next) => {
    try {
        const partners = await Partner.find()
        res.status(200).json({success:true,message:"Success",result:partners, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}