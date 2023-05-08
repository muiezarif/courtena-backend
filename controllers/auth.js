import Admin from "../models/Admin.js";
import Customer from "../models/Customer.js";
import Partner from "../models/Partner.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const registerAdmin = async (req,res,next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt)

        const newAdmin = new Admin({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            city:req.body.city,
            phone:req.body.phone
    
        })
        // const newAdmin = new Admin(req.body)
        const savedAdmin = await newAdmin.save()
        res.status(200).json({success:true,message:"Success",result:savedAdmin, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{}, error:error})
    }
    
}

export const registerPartner = async (req,res,next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt)

        const newPartner = new Partner({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            city:req.body.city,
            phone:req.body.phone
    
        })
        // const newAdmin = new Admin(req.body)
        const savedPartner = await newPartner.save()
        res.status(200).json({success:true,message:"Success",result:savedPartner, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{}, error:error})
    }
}

export const registerCustomer = async (req,res,next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt)

        const newCustomer = new Customer({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            city:req.body.city,
            phone:req.body.phone
    
        })
        // const newAdmin = new Admin(req.body)
        const savedCustomer = await newCustomer.save()
        res.status(200).json({success:true,message:"Success",result:savedCustomer, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{}, error:error})
    }
}

export const loginAdmin = async (req,res,next) => {
    try {
        const admin = await Admin.findOne({email:req.body.email})
        if(!admin){
            return res.status(200).json({success:false,message:"This is not Admin",result:{}, error:{}})  
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password,admin.password)
        if(!isPasswordCorrect){
            return res.status(200).json({success:false,message:"Wrong password",result:{}, error:{}})  
        }
        const {password, ...otherDetails} = admin._doc
        const token = jwt.sign({id:admin._id},process.env.JWT_SECRET_KEY)
        res.cookie("access_token",token,{httpOnly:true,}).status(200).json({success:true,message:"Success",result:{token:token,...otherDetails}, error:{}})     
    } catch (error) {
        console.log(error)
        res.status(200).json({success:false,message:"Failure",result:{}, error:error})
    }
}

export const loginPartner = async (req,res,next) => {
    try {
        const partner = await Partner.findOne({email:req.body.email})
        if(!partner){
            return res.status(200).json({success:false,message:"This is not Partner",result:{}, error:{}})  
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password,partner.password)
        if(!isPasswordCorrect){
            return res.status(200).json({success:false,message:"Wrong password",result:{}, error:{}})  
        }
        const {password, ...otherDetails} = partner._doc
        const token = jwt.sign({id:partner._id},process.env.JWT_SECRET_KEY)
        res.cookie("access_token",token,{httpOnly:true,}).status(200).json({success:true,message:"Success",result:{token:token,...otherDetails}, error:{}})     
    } catch (error) {
        console.log(error)
        res.status(200).json({success:false,message:"Failure",result:{}, error:error})
    }
}

export const loginCustomer = async (req,res,next) => {
    try {
        const customer = await Customer.findOne({phone:req.body.phone})
        if(!customer){
            return res.status(200).json({success:false,message:"No Account Found",result:{}, error:{}})  
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password,customer.password)
        if(!isPasswordCorrect){
            return res.status(200).json({success:false,message:"Wrong password",result:{}, error:{}})  
        }
        const {password, ...otherDetails} = customer._doc
        const token = jwt.sign({id:customer._id},process.env.JWT_SECRET_KEY)
        res.cookie("access_token",token,{httpOnly:true,}).status(200).json({success:true,message:"Success",result:{token:token,...otherDetails}, error:{}})     
    } catch (error) {
        console.log(error)
        res.status(200).json({success:false,message:"Failure",result:{}, error:error})
    }
}

export const forgotAdminPassword = async (req,res,next) => {

}

export const forgotPartnerPassword = async (req,res,next) => {

}

export const forgotCustomerPassword = async (req,res,next) => {

}

