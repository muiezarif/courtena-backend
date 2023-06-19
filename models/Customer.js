import mongoose from "mongoose";

const {Schema} = mongoose

const CustomerSchema = new mongoose.Schema(
{
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
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
    isFirstTime:{
        type:Boolean,
        default:false
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

export default mongoose.model("Customer",CustomerSchema)