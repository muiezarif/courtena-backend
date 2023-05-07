import mongoose from "mongoose";

const {Schema} = mongoose

const UserSchema = new mongoose.Schema(
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
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isPartner:{
        type:Boolean,
        default:false
    },
    isCustomer:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
});

export default mongoose.model("User",UserSchema)