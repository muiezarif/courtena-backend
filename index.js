import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import venuesRoute from "./routes/venues.js"
import courtsRoute from "./routes/courts.js"
import bookingsRoute from "./routes/bookings.js"
import settlementsRoute from "./routes/settlements.js"
import reportsRoute from "./routes/reports.js"
import cfRoute from "./routes/customersfeedback.js"
const app = express();
dotenv.config();

// DB Connection
const db_connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected to mongodb")
    } catch (error) {
        throw error
    }
}


// Middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/venues", venuesRoute)
app.use("/api/courts", courtsRoute)
app.use("/api/bookings", bookingsRoute)
app.use("/api/settlements", settlementsRoute)
app.use("/api/reports", reportsRoute)
app.use("/api/customers-feedback", cfRoute)
app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(200).json({success:false,message:errorMessage,result:{},error:err})
})


app.get("/", (req,res) => {
    res.send("First request")
})

app.listen(8800, () => {
    db_connect()
    console.log("Server started on port 8800")
})