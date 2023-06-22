import Admin from "../models/Admin.js"
import Bookings from "../models/Bookings.js"
import Court from "../models/Court.js"
import Customer from "../models/Customer.js"
import Partner from "../models/Partner.js"
import Sports from "../models/Sports.js"
import Venue from "../models/Venue.js"
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

export const addCategory = async (req,res,next) => {
    const newCategory = new Admin(req.body)
    try {
        const savedCategory = await newCategory.save()
        res.status(200).json({success:true,message:"Success",result:savedCategory, error:{}})    
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

export const getPartnerVenues = async (req,res,next) => {
    try {
        const admin = await Venue.find({partner:req.params.partnerId})
        res.status(200).json({success:true,message:"Success",result:admin, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getPartnerCourts = async (req,res,next) => {
    try {
        const admin = await Court.find({partner:req.params.partnerId})
        res.status(200).json({success:true,message:"Success",result:admin, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAdminCustomers = async (req,res,next) => {
    try {
        const customers = await Customer.find()
        res.status(200).json({success:true,message:"Success",result:customers, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAdminBookings = async (req,res,next) => {
    try {
        const bookings = await Bookings.find()
        const updatedBookings = bookings.map(async (item) => {
            const court = await Court.findById(item.court)
            const venue = await Venue.findById(item.venue)
            const customer = await Customer.findById(item.customer)
            const partner = await Partner.findById(item.partner)
            return {booking:item,court,venue,customer,partner}
        })
        const resolvedBookings = await Promise.all(updatedBookings)
        res.status(200).json({success:true,message:"Success",result:resolvedBookings, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getPartnerBookings = async(req, res, next) => {
    try {
        const bookings = await Bookings.find({partner:req.params.partnerid})
        const updatedBookings = bookings.map(async (item) => {
            const court = await Court.findById(item.court)
            const venue = await Venue.findById(item.venue)
            const customer = await Customer.findById(item.customer)
            return {booking:item,court,venue,customer}
        })
        const resolvedBookings = await Promise.all(updatedBookings)
        res.status(200).json({ success: true, message: "Success", result: resolvedBookings, error: {} });

    } catch (error) {
        res.status(200).json({ success: false, message: "Failure", result: {}, error: error });
    }
    
  }

