import express from "express";
import { verifyPartner } from "../utils/verifyToken.js";
import { createCourt, deleteCourt, getAllCourts, getAllCourtsByPartner, getCourt, updateCourt } from "../controllers/court.js";

const router = express.Router();

//CREATE 
router.post("/create/:venueId",verifyPartner, createCourt)
//UPDATE
router.put("/:id/update",verifyPartner, updateCourt)
//DELETE
router.delete("/delete/:id/:venueId",verifyPartner, deleteCourt)
//GET ALL VENUES BY PARTNER
router.get("/:partnerid",verifyPartner, getAllCourtsByPartner)
//GET
router.get("/get-court-detail/:id", getCourt)
//GET ALL
router.get("/", getAllCourts)

export default router