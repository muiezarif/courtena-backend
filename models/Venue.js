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
    venuePhone:{
        type:Number
    },
    featured:{
        type:Boolean,
        default:false
    },
    postalCode:{
        type:Number
    },
    // amenities:[{cafeteria:Boolean},{changeRoom:Boolean},{disabledAccess:Boolean},{freeParking:Boolean},{lockers:Boolean},{materialRenting:Boolean},{playPark:Boolean},{privateParking:Boolean},{restaurant:Boolean},{snackbar:Boolean},{store:Boolean},{vendingMachine:Boolean},{wifi:Boolean}],
    amenities:{cafeteria:Boolean,changeRoom:Boolean,disabledAccess:Boolean,freeParking:Boolean,lockers:Boolean,materialRenting:Boolean,playPark:Boolean,privateParking:Boolean,restaurant:Boolean,snackbar:Boolean,store:Boolean,vendingMachine:Boolean,wifi:Boolean},
    timing:{mondayOn:Boolean,mondayFrom:String,mondayTo:String,tuesdayOn:Boolean,tuesdayFrom:String,tuesdayTo:String,wedOn:Boolean,wedFrom:String,wedTo:String,thursdayOn:Boolean,thursdayFrom:String,thursdayTo:String,fridayOn:Boolean,fridayFrom:String,fridayTo:String,satOn:Boolean,satFrom:String,satTo:String,sunOn:Boolean,sunFrom:String,sunTo:String,holidayOn:Boolean,holidayFrom:String,holidayTo:String},
    partner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Partner'
    }
},
{
    timestamps:true
})

export default mongoose.model("Venue",VenueSchema)