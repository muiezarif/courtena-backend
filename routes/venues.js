import express from "express";
import Venue from "../models/Venue.js";
import { createError } from "../utils/error.js"
import { createVenue, deleteVenue, getAllVenues, getAllVenuesByPartner, getVenue, updateVenue } from "../controllers/venue.js";
import { verifyPartner } from "../utils/verifyToken.js";
import multer from "multer"
import path from "path"
import fs from "fs"
const router = express.Router();

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        const partnerId = req.partner.id
        const venueName = req.body.name
        const destinationPath = `./images/${partnerId}/venue/${venueName}`
        fs.mkdirSync(destinationPath, { recursive: true });
        cb(null,destinationPath)
    },
    filename:(req,file,cb) => {
        // console.log("gg")
        console.log(file)
        cb(null,Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage:storage})
// const upload = multer({dest:"./images"})

//CREATE 
router.post("/create",verifyPartner, upload.array('photos',10), createVenue)
//UPDATE
router.put("/:id/update",verifyPartner, updateVenue)
//DELETE
router.delete("/:id/delete",verifyPartner, deleteVenue)
//GET ALL VENUES BY PARTNER
router.get("/:partnerid",verifyPartner, getAllVenuesByPartner)
//GET
router.get("/get-venue/:id", getVenue)

//GET ALL
router.get("/", getAllVenues)


export default router