import express from "express";
import { verifyPartner } from "../utils/verifyToken.js";
import { createPartnerSubscription, deletePartnerSubscription, getAllPartnerSubscription, getPartnerSubscription, getSubscriptionOfPartner, updatePartnerSubscription } from "../controllers/partnerSubscription.js";

const router = express.Router();

//CREATE 
router.post("/create",verifyPartner, createPartnerSubscription)
//UPDATE
router.put("/:id/update",verifyPartner,  updatePartnerSubscription)
//DELETE
router.delete("/delete/:id",verifyPartner, deletePartnerSubscription)
//GET
router.get("/get-partner-subscription-info/:partnerid", getSubscriptionOfPartner)
//GET
router.get("/:id", getPartnerSubscription)
//GET ALL
router.get("/", getAllPartnerSubscription)

export default router