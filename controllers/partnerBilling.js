import PartnerBillingInformation from "../models/PartnerBillingInformation.js"
import reservationRules from "../utils/constants.js"
import Court from "../models/Court.js"
export const createPartnerBillingInformation = async (req,res,next) => {
    const newPartnerBillingInformation = new PartnerBillingInformation(req.body)
    try {
        const savedPartnerBillingInformation = await newPartnerBillingInformation.save()

        res.status(200).json({success:true,message:"Success",result:savedPartnerBillingInformation, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const updatePartnerBillingInformation = async (req,res,next) => {
    try {
        const updatedPartnerBillingInformation = await PartnerBillingInformation.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json({success:true,message:"Success",result:updatedPartnerBillingInformation, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const deletePartnerBillingInformation = async (req,res,next) => {
    try {
        await PartnerBillingInformation.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,message:"PartnerBillingInformation Deleted",result:{}, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getPartnerBillingInformation = async (req,res,next) => {
    try {
        const partnerBillingInformation = await PartnerBillingInformation.findById(req.params.id)
        res.status(200).json({success:true,message:"Success",result:partnerBillingInformation, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getPartnerBillingInformationInfo = async (req,res,next) => {
    try {
        const partnerBillingInfo = await PartnerBillingInformation.findOne({partner:req.params.partnerid}).catch(err => {
            console.log(err)
        })
        res.status(200).json({success:true,message:"Success",result:partnerBillingInfo, error:{}})    
    } catch (error) {
        console.log(error)
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAllPartnerBillingInformation = async (req,res,next) => {
    try {
        const partnerBillingInformation = await PartnerBillingInformation.find()
        res.status(200).json({success:true,message:"Success",result:partnerBillingInformation, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}
