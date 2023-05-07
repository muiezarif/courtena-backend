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
        type:String,
        required:true
    },
    img:{
        type:String
    },
    city:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});

export default mongoose.model("Partner",PartnerSchema)