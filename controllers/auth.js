import Admin from "../models/Admin.js";
import Customer from "../models/Customer.js";
import Partner from "../models/Partner.js";
import bcrypt from "bcryptjs"

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

}

export const registerCustomer = async (req,res,next) => {

}

export const loginAdmin = async (req,res,next) => {

}

export const loginPartner = async (req,res,next) => {

}

export const loginCustomer = async (req,res,next) => {

}

export const forgotAdminPassword = async (req,res,next) => {

}

export const forgotPartnerPassword = async (req,res,next) => {

}

export const forgotCustomerPassword = async (req,res,next) => {

}

