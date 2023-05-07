import express from "express";

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Customer Feedback endpoint")
})

export default router