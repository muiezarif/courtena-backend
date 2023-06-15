import AdminSubscription from "../models/AdminSubscription.js"
export const createAdminSubscription = async (req,res,next) => {
    const newAdminSubscription = new AdminSubscription(req.body)
    try {
        const savedAdminSubscription = await newAdminSubscription.save()
        res.status(200).json({success:true,message:"Success",result:savedAdminSubscription, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
        // res.status(500).json(error)
    }
}

export const updateAdminSubscription = async (req,res,next) => {
    try {
        const updatedAdminSubscription = await AdminSubscription.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json({success:true,message:"Success",result:updatedAdminSubscription, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const deleteAdminSubscription = async (req,res,next) => {
    try {
        await AdminSubscription.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,message:"AdminSubscription Deleted",result:{}, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAdminSubscription = async (req,res,next) => {
    try {
        const adminSubscription = await AdminSubscription.findById(req.params.id)
        res.status(200).json({success:true,message:"Success",result:adminSubscription, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAllAdminSubscription = async (req,res,next) => {
    try {
        const adminSubscription = await AdminSubscription.find()
        res.status(200).json({success:true,message:"Success",result:adminSubscription, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}
