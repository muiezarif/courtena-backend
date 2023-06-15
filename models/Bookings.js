import mongoose from "mongoose";

const {Schema} = mongoose

const BookingsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },       
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
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
    court:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Court'
    },
    courtNumbers:[{number:Number,unavailableTimes:[{type:String}],unavailableDates:[{type:Date}]}]
},{timestamps:true})

export default mongoose.model("Bookings",BookingsSchema)