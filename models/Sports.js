import mongoose from "mongoose";

const {Schema} = mongoose

const SportsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Admin'
    }
})

export default mongoose.model("Sports",SportsSchema)