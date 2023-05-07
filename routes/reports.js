import express from "express";

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Reports endpoint")
})

export default router