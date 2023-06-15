import mongoose from "mongoose";

const {Schema} = mongoose

const AdminSubscriptionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    tier:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Admin'
    }
},
{
    timestamps:true
})

export default mongoose.model("AdminSubscription",AdminSubscriptionSchema)