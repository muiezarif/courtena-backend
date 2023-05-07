import express from "express";

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Courts endpoint")
})

export default router