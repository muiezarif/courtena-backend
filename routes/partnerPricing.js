import express from "express";
import { verifyPartner } from "../utils/verifyToken.js";
import { createPartnerPricing, deletePartnerPricing, getAllPartnerPricing, getPartnerPricing, getPartnerPricingInfo, getPartnerPricings, updatePartnerPricing } from "../controllers/partnerPricing.js";

const router = express.Router();

//CREATE 
router.post("/create",verifyPartner, createPartnerPricing)
//UPDATE
router.put("/:id/update",verifyPartner,  updatePartnerPricing)
//DELETE
router.delete("/delete/:id",verifyPartner, deletePartnerPricing)
//GET
router.get("/partner-pricings/:partnerid", getPartnerPricings)
//GET
router.get("/pricing-info/:partnerid", getPartnerPricingInfo)
//GET
router.get("/:id", getPartnerPricing)
//GET ALL
router.get("/", getAllPartnerPricing)

export default router