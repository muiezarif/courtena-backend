import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createAdminSubscription, deleteAdminSubscription, getAdminSubscription, getAllAdminSubscription, updateAdminSubscription } from "../controllers/adminSubscription.js";

const router = express.Router();

//CREATE 
router.post("/create",verifyAdmin, createAdminSubscription)
//UPDATE
router.put("/:id/update",verifyAdmin,  updateAdminSubscription)
//DELETE
router.delete("/delete/:id",verifyAdmin, deleteAdminSubscription)
//GET
router.get("/:id", getAdminSubscription)
//GET ALL
router.get("/", getAllAdminSubscription)

export default router