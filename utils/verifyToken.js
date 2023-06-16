import jwt from "jsonwebtoken";


export const verifyToken = (req,res,next) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({success:false,message:"Not Authenticated",result:{},error:{}})
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,admin) => {
        if(err){
            return res.status(403).json({success:false,message:"Token Not Valid!",result:{},error:{}})
        }
        req.admin = admin
        next()
    })
}

export const verifyCustomerToken = (req,res,next) => {
    const token = req.headers.authorization;
    // console.log(token)
    if(!token){
        return res.status(401).json({success:false,message:"Not Authenticated",result:{},error:{}})
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,customer) => {
        if(err){
            return res.status(403).json({success:false,message:"Token Not Valid!",result:{},error:{}})
        }
        req.customer = customer
        next()
    })
}

export const verifyPartnerToken = (req,res,next) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({success:false,message:"Not Authenticated",result:{},error:{}})
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,partner) => {
        if(err){
            return res.status(403).json({success:false,message:"Token Not Valid!",result:{},error:{}})
        }
        req.partner = partner
        next()
    })
}

export const verifyAdmin = (req,res,next) => {
    verifyToken(req,res,next, () => {
        if(req.admin.id === req.params.id){
            next()
        }else{
            return res.status(403).json({success:false,message:"Not Authorized!",result:{},error:{}})
        }
    })    
}
export const verifyPartner = (req,res,next) => {
    verifyPartnerToken(req,res,next, () => {
        if(req.partner.id === req.params.id){
            next()
        }else{
            return res.status(403).json({success:false,message:"Not Authorized!",result:{},error:{}})
        }
    })    
}
export const verifyCustomer = (req,res,next) => {
    verifyCustomerToken(req,res,next, () => {
        if(req.customer.id === req.params.id){
            next()
        }else{
            return res.status(403).json({success:false,message:"Not Authorized!",result:{},error:{}})
        }
    })    
}