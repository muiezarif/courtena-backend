import Venue from "../models/Venue.js"
export const createVenue = async (req,res,next) => {
    const newVenue = new Venue(req.body)
    try {
        const savedVenue = await newVenue.save()
        res.status(200).json({success:true,message:"Success",result:savedVenue, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
        // res.status(500).json(error)
    }
}

export const updateVenue = async (req,res,next) => {
    try {
        const updatedVenue = await Venue.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json({success:true,message:"Success",result:updatedVenue, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const deleteVenue = async (req,res,next) => {
    try {
        await Venue.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,message:"Venue Deleted",result:{}, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getVenue = async (req,res,next) => {
    try {
        const venue = await Venue.findById(req.params.id)
        res.status(200).json({success:true,message:"Success",result:venue, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAllVenues = async (req,res,next) => {
    try {
        const venues = await Venue.find()
        res.status(200).json({success:true,message:"Success",result:venues, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}