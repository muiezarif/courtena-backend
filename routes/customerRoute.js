import express from "express";
import { verifyCustomer } from "../utils/verifyToken.js";
import { customerCreateBooking, getCustomer, getCustomerBookingDetail, getCustomerBookings, getCustomerCourtInfo, getCustomerCourts, getCustomerCourtsBySearch, getCustomerHomeData, getCustomerPartnerCourtsByVenue, getCustomerVenues, getCustomerVenuesBySearch, updateCustomer } from "../controllers/customer.js";

const router = express.Router();

router.get("/get-customer-info/:id",verifyCustomer,getCustomer)
router.get("/get-home-data",verifyCustomer,getCustomerHomeData)
router.get("/get-venues",verifyCustomer,getCustomerVenues)
router.get("/get-courts",verifyCustomer,getCustomerCourts)
router.get("/get-venues/:searchterm",verifyCustomer,getCustomerVenuesBySearch)
router.get("/get-courts/:searchterm",verifyCustomer,getCustomerCourtsBySearch)
router.get("/get-partner-venue-courts/:partnerid/:venueid",verifyCustomer,getCustomerPartnerCourtsByVenue)
router.get("/get-customer-bookings/:customerid",verifyCustomer,getCustomerBookings)
router.get("/get-court-info/:courtid",verifyCustomer,getCustomerCourtInfo)
router.get("/get-booking-detail/:bookingid/:customerid",verifyCustomer,getCustomerBookingDetail)


router.post("/customer-create-booking",verifyCustomer,customerCreateBooking)

router.put("/customer-update-info/:id",verifyCustomer,updateCustomer)
export default router