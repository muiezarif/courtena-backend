import mongoose from "mongoose";

const {Schema} = mongoose

const BookingsSchema = new mongoose.Schema({
    // title:{
    //     type:String,
    //     required:true
    // },
    duration:{
        type:String,
        required:true
    },
    status:{
        type:String,
        // required:true
        default:""
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    paymentAmount:{
        type:Number,
        required:true
    },
    paymentStatus:{
        type:String,
        default:"Not Paid"
    },
    dateTimeInfo:{
        day:String,
        month:String,
        year:String,
        timeFrom:String,
        timeTo:String,
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