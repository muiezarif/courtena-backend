import mongoose from "mongoose";

const {Schema} = mongoose

const AdminSchema = new mongoose.Schema(
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
        type:String,
    },
    phone:{
        type:String
    },
    password:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});

export default mongoose.model("Admin",AdminSchema)