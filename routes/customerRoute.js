import express from "express";
import { verifyCustomer } from "../utils/verifyToken.js";
import { getCustomerCourts, getCustomerCourtsBySearch, getCustomerHomeData, getCustomerPartnerCourtsByVenue, getCustomerVenues, getCustomerVenuesBySearch } from "../controllers/customer.js";

const router = express.Router();

router.get("/get-home-data",verifyCustomer,getCustomerHomeData)
router.get("/get-venues",verifyCustomer,getCustomerVenues)
router.get("/get-courts",verifyCustomer,getCustomerCourts)
router.get("/get-venues/:searchterm",verifyCustomer,getCustomerVenuesBySearch)
router.get("/get-courts/:searchterm",verifyCustomer,getCustomerCourtsBySearch)
router.get("/get-partner-venue-courts/:partnerid/:venueid",verifyCustomer,getCustomerPartnerCourtsByVenue)

export default router