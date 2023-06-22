import express from "express";
import { verifyPartner } from "../utils/verifyToken.js";
import { getPartnerCustomers,getPartnerBookings } from "../controllers/partner.js";

const router = express.Router();

//GET
router.get("/customers/:partnerid",verifyPartner,getPartnerCustomers)
router.get("/get-partner-bookings/:partnerid",verifyPartner,getPartnerBookings)

export default router