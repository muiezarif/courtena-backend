import Partner from "../models/Partner.js";
import AdminSubscription from "../models/AdminSubscription.js";
import PartnerSubscription from "../models/PartnerSubscription.js"
export const createPartnerSubscription = async (req,res,next) => {
    const newPartnerSubscription = new PartnerSubscription(req.body)
    let partner
    try {
        const savedPartnerSubscription = await newPartnerSubscription.save()
        try {
            partner = await Partner.findByIdAndUpdate(req.body.partner,{
                isSubscribed:true,
            });
        } catch (error) {
            res.status(200).json({success:false,message:"Failure",result:{},error:error})
        }
        res.status(200).json({success:true,message:"Success",result:{savedPartnerSubscription,partner}, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
        // res.status(500).json(error)
    }
}

export const updatePartnerSubscription = async (req,res,next) => {
    try {
        const updatedPartnerSubscription = await PartnerSubscription.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json({success:true,message:"Success",result:updatedPartnerSubscription, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const deletePartnerSubscription = async (req,res,next) => {
    try {
        await PartnerSubscription.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,message:"PartnerSubscription Deleted",result:{}, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getPartnerSubscription = async (req,res,next) => {
    try {
        const partnerSubscription = await PartnerSubscription.findById(req.params.id)
        res.status(200).json({success:true,message:"Success",result:partnerSubscription, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getSubscriptionOfPartner = async (req,res,next) => {
    try {
        const partnerSubscription = await PartnerSubscription.findOne({partner:req.params.partnerid})
        if(partnerSubscription){
            const subscriptionType = await AdminSubscription.findById(partnerSubscription.subscriptionType)
            const partner = await Partner.findById(partnerSubscription.partner)
            res.status(200).json({success:true,message:"Success",result:{partnerSubscription,partner,subscriptionType}, error:{}})
        }else{
            res.status(200).json({success:true,message:"Success",result:{partnerSubscription,partner:{},subscriptionType:{}}, error:{}})            
        }
            
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAllPartnerSubscription = async (req,res,next) => {
    try {
        const partnerSubscription = await PartnerSubscription.find()
        res.status(200).json({success:true,message:"Success",result:partnerSubscription, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}
