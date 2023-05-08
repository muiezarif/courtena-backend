import express from "express";
import { verifyPartner } from "../utils/verifyToken.js";
import { createCourt, deleteCourt, getAllCourts, getCourt, updateCourt } from "../controllers/court.js";

const router = express.Router();

//CREATE 
router.post("/create/:venueId",verifyPartner, createCourt)
//UPDATE
router.put("/:id/update",verifyPartner, updateCourt)
//DELETE
router.delete("/delete/:id/:venueId",verifyPartner, deleteCourt)
//GET
router.get("/:id", getCourt)
//GET ALL
router.get("/", getAllCourts)

export default router