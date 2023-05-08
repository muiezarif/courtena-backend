import mongoose from "mongoose";

const {Schema} = mongoose

const PartnerSchema = new mongoose.Schema(
{
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    country:{
        type:String
    },
    img:{
        type:String
    },
    city:{
        type:String
    },
    phone:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    isSubscribed:{
        type: Boolean,
        default:false
    }
},
{
    timestamps:true
});

export default mongoose.model("Partner",PartnerSchema)