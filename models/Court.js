import mongoose from "mongoose";

const {Schema} = mongoose

const CourtSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        // required:true
    },
    description:{
        type:String,
        required:true
    },
    maxPeople:{
        type:Number,
        required:true
    },
    bookingInfo:{
        type:[Object]
    },
    pricing:{
        type:[Object]
    },
    courtFeature:{wall:Boolean,crystal:Boolean,panoramic:Boolean,single:Boolean,double:Boolean},
    advancedSettings:{bookableOnline:Boolean,courtActive:Boolean},
    courtType:{
        type:String
    },
    image:{
        type:String
    },
    partner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Partner'
    },
    sports:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Sports'
    },
    venue:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Venue'
    },
    courtNumbers:[{number:Number,unavailableTimes:[{type:String}],unavailableDates:[{type:Date}]}]
},{timestamps:true})

export default mongoose.model("Court",CourtSchema)