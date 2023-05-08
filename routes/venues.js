import express from "express";
import Venue from "../models/Venue.js";
import { createError } from "../utils/error.js"
import { createVenue, deleteVenue, getAllVenues, getVenue, updateVenue } from "../controllers/venue.js";
import { verifyPartner } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE 
router.post("/create",verifyPartner, createVenue)
//UPDATE
router.put("/:id/update",verifyPartner, updateVenue)
//DELETE
router.delete("/:id/delete",verifyPartner, deleteVenue)
//GET
router.get("/:id", getVenue)
//GET ALL
router.get("/", getAllVenues)


export default router