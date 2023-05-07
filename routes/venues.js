import express from "express";
import Venue from "../models/Venue.js";
import { createError } from "../utils/error.js"
import { createVenue, deleteVenue, getAllVenues, getVenue, updateVenue } from "../controllers/venue.js";
const router = express.Router();

//CREATE 
router.post("/create", createVenue)
//UPDATE
router.put("/:id/update", updateVenue)
//DELETE
router.delete("/:id/delete", deleteVenue)
//GET
router.get("/:id", getVenue)
//GET ALL
router.get("/", getAllVenues)


export default router