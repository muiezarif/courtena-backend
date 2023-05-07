import mongoose from "mongoose";

const {Schema} = mongoose

const VenueSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    photos:{
        type:[String]
    },
    courts:{
        type:[String]
    },
    cheapestPrice:{
        type:Number
    },
    featured:{
        type:Boolean,
        default:false
    }
})

export default mongoose.model("Venue",VenueSchema)