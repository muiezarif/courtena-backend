import Admin from "../models/Admin.js"
export const createAdmin = async (req,res,next) => {
    const newAdmin = new Admin(req.body)
    try {
        const savedAdmin = await newAdmin.save()
        res.status(200).json({success:true,message:"Success",result:savedAdmin, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
        // res.status(500).json(error)
    }
}

export const updateAdmin = async (req,res,next) => {
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json({success:true,message:"Success",result:updatedAdmin, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const deleteAdmin = async (req,res,next) => {
    try {
        await Admin.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,message:"Admin Deleted",result:{}, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAdmin = async (req,res,next) => {
    try {
        const admin = await Admin.findById(req.params.id)
        res.status(200).json({success:true,message:"Success",result:admin, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAllAdmins = async (req,res,next) => {
    try {
        const admins = await Admin.find()
        res.status(200).json({success:true,message:"Success",result:admins, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}