import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { getAdminBookings, getAdminCustomers, getPartnerBookings } from "../controllers/admin.js";


const router = express.Router();

//GET
router.get("/get-bookings",verifyAdmin,getAdminBookings)
router.get("/get-customers",verifyAdmin,getAdminCustomers)
router.get("/get-partner-bookings/:partnerid",verifyAdmin,getPartnerBookings)

export default router