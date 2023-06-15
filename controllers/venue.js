import Court from "../models/Court.js"
import Partner from "../models/Partner.js"
import Venue from "../models/Venue.js"
export const createVenue = async (req,res,next) => {
    console.log(req.files)
    var newPhotos = []
    // const photosArray = JSON.parse(req.body.photos)
    if(req.files){
        req.files.map(item =>{
            // console.log(item)
            newPhotos.push(`${req.protocol}://${req.hostname}:${req.socket.localPort}/`+item.path)
        })
    }
    
    const data = {
        name:req.body.name,
        city:req.body.city,
        address:req.body.address,
        photos:newPhotos,
        description:req.body.description,
        cheapestPrice:req.body.cheapestPrice,
        venuePhone:req.body.venuePhone,
        postalCode:req.body.postalCode,
        partner:req.body.partner,
        amenities:JSON.parse(req.body.amenities),
        timing:JSON.parse(req.body.timing)
    }
    console.log(data)
    const newVenue = new Venue(data)
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
        await Court.deleteMany({venue:req.params.id})
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

export const getAllVenuesByPartner = async (req,res,next) => {
    try {
        const partner = await Partner.findById(req.params.partnerid)
        const venues = await Venue.find({partner:req.params.partnerid})
        const resData = {partner,venues}
        res.status(200).json({success:true,message:"Success",result:resData, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}