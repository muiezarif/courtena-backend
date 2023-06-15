import Bookings from "../models/Bookings.js"
export const createBookings = async (req,res,next) => {
    const newBookings = new Bookings(req.body)
    try {
        const savedBookings = await newBookings.save()
        res.status(200).json({success:true,message:"Success",result:savedBookings, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
        // res.status(500).json(error)
    }
}

export const updateBookings = async (req,res,next) => {
    try {
        const updatedBookings = await Bookings.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json({success:true,message:"Success",result:updatedBookings, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const deleteBookings = async (req,res,next) => {
    try {
        await Bookings.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,message:"Bookings Deleted",result:{}, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getBookings = async (req,res,next) => {
    try {
        const bookings = await Bookings.findById(req.params.id)
        res.status(200).json({success:true,message:"Success",result:bookings, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAllBookings = async (req,res,next) => {
    try {
        const bookings = await Bookings.find()
        res.status(200).json({success:true,message:"Success",result:bookings, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}
