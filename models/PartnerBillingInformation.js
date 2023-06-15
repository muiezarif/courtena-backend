import mongoose from "mongoose";

const {Schema} = mongoose

const PartnerBillingInformationSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    taxInformation:{
        taxIDType:String,
        taxNumber:String,
        vatTax:Number
    },
    companyAddress:{
        streetAddress:String,
        postalCode:String,
        city:String,
        country:String
    },
    bankInformation:{
        iban:String,
        bicSwift:String
    },
    partner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Partner'
    }
},
{
    timestamps:true
})

export default mongoose.model("PartnerBillingInformation",PartnerBillingInformationSchema)