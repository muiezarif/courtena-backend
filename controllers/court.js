import Court from "../models/Court.js"
import Partner from "../models/Partner.js"
import Venue from "../models/Venue.js"
export const createCourt = async (req,res,next) => {
    const venueId = req.params.venueId
    const newCourt = new Court(req.body)
    try {
        const savedCourt = await newCourt.save()
        try {
            await Venue.findByIdAndUpdate(venueId,{
                $push:{courts:savedCourt._id},
            });
        } catch (error) {
            res.status(200).json({success:false,message:"Failure",result:{},error:error})
        }
        res.status(200).json({success:true,message:"Success",result:savedCourt, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
        // res.status(500).json(error)
    }
}

export const updateCourt = async (req,res,next) => {
    try {
        const updatedCourt = await Court.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json({success:true,message:"Success",result:updatedCourt, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const deleteCourt = async (req,res,next) => {

    try {
        await Court.findByIdAndDelete(req.params.id)
        try {
            await Venue.findByIdAndUpdate(req.params.venueId,{
                $pull:{courts:req.params.id},
            })
        } catch (error) {
            res.status(200).json({success:false,message:"Failure",result:{},error:error})
        }
        res.status(200).json({success:true,message:"Court Deleted",result:{}, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getCourt = async (req,res,next) => {
    try {
        const court = await Court.findById(req.params.id)
        res.status(200).json({success:true,message:"Success",result:court, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAllCourts = async (req,res,next) => {
    try {
        const courts = await Court.find()
        res.status(200).json({success:true,message:"Success",result:courts, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAllCourtsByPartner = async (req,res,next) => {
    try {
        const partner = await Partner.findById(req.params.partnerid)
        const courts = await Court.find({partner:req.params.partnerid})
        const resData = {partner,courts}
        res.status(200).json({success:true,message:"Success",result:resData, error:{}})    
    } catch (error) {
        console.log(error.message)
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}