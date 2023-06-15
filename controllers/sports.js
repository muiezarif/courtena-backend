import Sports from "../models/Sports.js"
export const createSports = async (req,res,next) => {
    const newSports = new Sports(req.body)
    try {
        const savedSports = await newSports.save()
        res.status(200).json({success:true,message:"Success",result:savedSports, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
        // res.status(500).json(error)
    }
}

export const updateSports = async (req,res,next) => {
    try {
        const updatedSports = await Sports.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json({success:true,message:"Success",result:updatedSports, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const deleteSports = async (req,res,next) => {
    try {
        await Sports.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,message:"Sports Deleted",result:{}, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getSports = async (req,res,next) => {
    try {
        const sports = await Sports.findById(req.params.id)
        res.status(200).json({success:true,message:"Success",result:sports, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAllSports = async (req,res,next) => {
    try {
        const sports = await Sports.find()
        res.status(200).json({success:true,message:"Success",result:sports, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}
