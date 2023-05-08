import mongoose from "mongoose";

const {Schema} = mongoose

const CourtSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    maxPeople:{
        type:Number,
        required:true
    },
    courtNumbers:[{number:Number,unavailableTimes:[{type:String}],unavailableDates:[{type:Date}]}]
},{timestamps:true})

export default mongoose.model("Court",CourtSchema)