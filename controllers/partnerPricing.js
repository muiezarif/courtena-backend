import PartnerPricing from "../models/PartnerPricing.js"
import reservationRules from "../utils/constants.js"
import Court from "../models/Court.js"
export const createPartnerPricing = async (req,res,next) => {
    const newPartnerPricing = new PartnerPricing(req.body)
    try {
        const savedPartnerPricing = await newPartnerPricing.save()
        try {
            req.body.courtsLinked.map( async (element) => {
                await Court.findByIdAndUpdate(element,{
                    $push:{pricing:savedPartnerPricing},
                }); // You can modify each element and create a new array
              });
            
        } catch (error) {
            res.status(200).json({success:false,message:"Failure",result:{},error:error})
        }
        res.status(200).json({success:true,message:"Success",result:savedPartnerPricing, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
        // res.status(500).json(error)
    }
}

export const updatePartnerPricing = async (req,res,next) => {
    try {
        const updatedPartnerPricing = await PartnerPricing.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json({success:true,message:"Success",result:updatedPartnerPricing, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const deletePartnerPricing = async (req,res,next) => {
    try {
        await PartnerPricing.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,message:"PartnerPricing Deleted",result:{}, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getPartnerPricing = async (req,res,next) => {
    try {
        const partnerPricing = await PartnerPricing.findById(req.params.id)
        res.status(200).json({success:true,message:"Success",result:partnerPricing, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getPartnerPricings = async (req,res,next) => {
    try {
        const partnerPricing = await PartnerPricing.find({partner:req.params.partnerid})
        res.status(200).json({success:true,message:"Success",result:partnerPricing, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getPartnerPricingInfo = async (req,res,next) => {
    try {
        const partner_courts = await Court.find({partner:req.params.partnerid})
        res.status(200).json({success:true,message:"Success",result:{courts:partner_courts,reservation_rules:reservationRules}, error:{}})    
    } catch (error) {
        console.log(error)
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAllPartnerPricing = async (req,res,next) => {
    try {
        const partnerPricing = await PartnerPricing.find()
        res.status(200).json({success:true,message:"Success",result:partnerPricing, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}
