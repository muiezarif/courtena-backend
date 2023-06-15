import express from "express";
import { deleteAdmin, getAdmin, getAllAdmins, getPartnerCourts, getPartnerVenues, updateAdmin } from "../controllers/admin.js";
import {deletePartner,updatePartner,getPartner,getAllPartners} from "../controllers/partner.js"
import {deleteCustomer,updateCustomer,getCustomer,getAllCustomers} from "../controllers/customer.js"
import {verifyAdmin, verifyCustomer, verifyPartner, verifyToken} from "../utils/verifyToken.js"
const router = express.Router();
// router.get("/checkauthentication", verifyToken, (req,res,next) => {
//     res.send("Authenticated")
// })
// router.get("/check-admin/:id",verifyAdmin, (req,res,next) => {
//     res.send("User checked you are logged in")
// })
// router.get("/check-partner/:id",verifyPartner, (req,res,next) => {
//     res.send("User checked you are logged in")
// })
// router.get("/check-customer/:id",verifyCustomer, (req,res,next) => {
//     res.send("User checked you are logged in")
// })

//Admin Routes
//UPDATE Admin
router.put("/admin/:id/update",verifyAdmin, updateAdmin)
//DELETE Admin
router.delete("/admin/:id/delete",verifyAdmin, deleteAdmin)
//GET Admin
router.get("/admin/:id",verifyAdmin, getAdmin)
//GET ALL Admin
router.get("/admins/",verifyAdmin, getAllAdmins)
//Admin get partner subscription detail
// router.get("/admins/partner/:partnerId/subscription",verifyAdmin, getPartnerSubscriptionDetail)
//Admin get partner venues
router.get("/admin/partner/:partnerId/venues",verifyAdmin, getPartnerVenues)
//Admin get partner courts
router.get("/admin/partner/:partnerId/courts",verifyAdmin, getPartnerCourts)
//Admin get partner bookings
// router.get("/admin/partner/:partnerId/bookings",verifyAdmin, getPartnerVenues)
//Admin get partner pricing
// router.get("/admin/partner/:partnerId/pricing",verifyAdmin, getPartnerVenues)
//Admin get partner settlements
// router.get("/admin/partner/:partnerId/settlements",verifyAdmin, getPartnerVenues)


//UPDATE Partner
router.put("/partner/:id/update",verifyPartner, updatePartner)
//DELETE Partner
router.delete("/partner/:id/delete",verifyPartner, deletePartner)
//GET Partner
router.get("/partner/:id",verifyPartner, getPartner)
//GET ALL Partner
router.get("/partners/",verifyAdmin, getAllPartners)

//UPDATE Customer
router.put("/customer/:id/update",verifyCustomer, updateCustomer)
//DELETE Customer
router.delete("/customer/:id/delete",verifyCustomer, deleteCustomer)
//GET Customer
router.get("/customer/:id",verifyCustomer, getCustomer)
//GET ALL Customer
router.get("/customers/",verifyAdmin, getAllCustomers)

export default router