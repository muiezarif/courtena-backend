import Bookings from "../models/Bookings.js"
import Court from "../models/Court.js"
import Customer from "../models/Customer.js"
import Partner from "../models/Partner.js"
import Venue from "../models/Venue.js"
export const createPartner = async (req,res,next) => {
    const newPartner = new Partner(req.body)
    try {
        const savedPartner = await newPartner.save()
        res.status(200).json({success:true,message:"Success",result:savedPartner, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
        // res.status(500).json(error)
    }
}

export const updatePartner = async (req,res,next) => {
    try {
        const updatedPartner = await Partner.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json({success:true,message:"Success",result:updatedPartner, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const deletePartner = async (req,res,next) => {
    try {
        await Partner.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,message:"Partner Deleted",result:{}, error:{}})     
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getPartner = async (req,res,next) => {
    try {
        const partner = await Partner.findById(req.params.id)
        res.status(200).json({success:true,message:"Success",result:partner, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

export const getAllPartners = async (req,res,next) => {
    try {
        const partners = await Partner.find()
        res.status(200).json({success:true,message:"Success",result:partners, error:{}})    
    } catch (error) {
        res.status(200).json({success:false,message:"Failure",result:{},error:error})
    }
}

// export const getPartnerCustomers = async (req,res,next) => {
//     try {
//         // const {customer} = await Bookings.find({})
//         const customersids = []
//         const customers = []
//         await Bookings.find({partner:req.params.partnerid}, 'customer')
//             .then((documents) => {
//                 const ids = documents.map((doc) => doc.customer.toString());
//                 const uniqueIds = ids.filter((value, index, self) => {
//                     return self.indexOf(value) === index;
//                   });
//                   const customers = uniqueIds.map(async (item) => {
//                     return await Customer.findById(item)
//                   })
//                   await Promise.all(customers)
//                   console.log(customers)
//                 res.status(200).json({success:true,message:"Success",result:uniqueIds, error:{}})    
//             })
//             .catch((error) => {
//                 console.error('Error retrieving IDs:', error);
//             });
       

//     } catch (error) {
//         res.status(200).json({success:false,message:"Failure",result:{},error:error})
//     }
// }


export const getPartnerCustomers = async (req, res, next) => {
    try {
      const customersIds = [];
      const customers = [];
  
      const documents = await Bookings.find({ partner: req.params.partnerid }, 'customer');
      const ids = documents.map((doc) => doc.customer.toString());
      const uniqueIds = [...new Set(ids)];
  
      const customerPromises = uniqueIds.map(async (item) => {
        return await Customer.findById(item);
      });
  
      const resolvedCustomers = await Promise.all(customerPromises);
  
      res.status(200).json({ success: true, message: "Success", result: resolvedCustomers, error: {} });
    } catch (error) {
      res.status(200).json({ success: false, message: "Failure", result: {}, error: error });
    }
  };

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