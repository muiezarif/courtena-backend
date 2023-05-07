import express from "express";

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Bookings endpoint")
})

export default router