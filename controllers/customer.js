import Court from "../models/Court.js"
import Customer from "../models/Customer.js"
import PartnerPricing from "../models/PartnerPricing.js"
import Venue from "../models/Venue.js"
export const createCustomer = async (req,res,next) => {
    const newCustomer = new Customer(req.body)
    try {
        const savedCustomer = await newCustomer.save()
        res.status(200).json({success:true,message:"Success",result:savedCustomer, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
        // res.status(500).json(error)
    }
}

export const updateCustomer = async (req,res,next) => {
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json({success:true,message:"Success",result:updatedCustomer, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const deleteCustomer = async (req,res,next) => {
    try {
        await Customer.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,message:"Customer Deleted",result:{}, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getCustomer = async (req,res,next) => {
    try {
        const customer = await Customer.findById(req.params.id)
        res.status(200).json({success:true,message:"Success",result:customer, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAllCustomers = async (req,res,next) => {
    try {
        const customers = await Customer.find()
        res.status(200).json({success:true,message:"Success",result:customers, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}
const getPricings = async(pricing) => {
    try {
        const partnerPricing = await PartnerPricing.findById(pricing)
        return partnerPricing
    } catch (error) {
        console.log(error)
    }
    
}
export const getCustomerHomeData = async (req,res,next) => {
    try {
        // console.log("RES")
        const venues = await Venue.find()
        // let courts = []
        const courts = await Court.find()
        
        const combinedArray = [];
        const modifiedCourts = courts.map((court) => {
            // courtPricing.push(item)
            // delete item.pricing
            // combinedArray.push(court)
            const modifiedCourtPricing = court.pricing.map((pricings) => {
                 getPricings(pricings)
            })
            return {...court.toObject(),pricings:modifiedCourtPricing}
            // console.log(courtWithPricing)
            // item.pricings = courtWithPricing
            // courtPricing.push(item)
        })
        // console.log(combinedArray)
        console.log(modifiedCourts)
        const result = {venues,modifiedCourts}
        // console.log(result)
        res.status(200).json({success:true,message:"Success",result:result, error:{}})    
    } catch (error) {
        console.log(error)
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}
