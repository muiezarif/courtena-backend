import express from "express";

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Settlements endpoint")
})

export default router