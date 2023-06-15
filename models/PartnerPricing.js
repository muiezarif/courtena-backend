import mongoose from "mongoose";

const {Schema} = mongoose

const PartnerPricingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    courtsLinked:{
        type:[String],
        required:true
    },
    reservationRules:{
        id:Number
    },
    pricing:{
        type:[{interval:String,price:Number,active:Boolean}],
        required:true
    },
    dateTime:{
        timedPrice:Boolean,
        pricingName:String,
        startDate:String,
        endDate:String,
        startTime:String,
        endTime:String
    },
    weekdays:{
        monday:Boolean,
        tuesday:Boolean,
        wednesday:Boolean,
        thursday:Boolean,
        friday:Boolean
    },
    weekends:{
        saturday:Boolean,
        sunday:Boolean
    },
    partner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Partner'
    }
},{timestamps:true})

export default mongoose.model("PartnerPricing",PartnerPricingSchema)