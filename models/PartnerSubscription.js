import mongoose from "mongoose";

const {Schema} = mongoose

const PartnerSubscriptionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subscriptionType:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AdminSubscription'
    },
    partner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Partner'
    }
},
{
    timestamps:true
})

export default mongoose.model("PartnerSubscription",PartnerSubscriptionSchema)