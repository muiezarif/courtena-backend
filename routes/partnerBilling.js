import express from "express";
import { verifyPartner } from "../utils/verifyToken.js";
import { createPartnerBillingInformation, deletePartnerBillingInformation, getAllPartnerBillingInformation, getPartnerBillingInformation, getPartnerBillingInformationInfo, updatePartnerBillingInformation } from "../controllers/partnerBilling.js";

const router = express.Router();

//CREATE 
router.post("/create",verifyPartner, createPartnerBillingInformation)
//UPDATE
router.put("/:id/update",verifyPartner,  updatePartnerBillingInformation)
//DELETE
router.delete("/delete/:id",verifyPartner, deletePartnerBillingInformation)
//GET
router.get("/billing-info/:partnerid", getPartnerBillingInformationInfo)
//GET
router.get("/:id", getPartnerBillingInformation)
//GET ALL
router.get("/", getAllPartnerBillingInformation)

export default router