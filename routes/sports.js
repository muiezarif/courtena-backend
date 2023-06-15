import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createSports, deleteSports, getAllSports, getSports, updateSports } from "../controllers/sports.js";

const router = express.Router();

//CREATE 
router.post("/create",verifyAdmin, createSports)
//UPDATE
router.put("/:id/update",verifyAdmin,  updateSports)
//DELETE
router.delete("/delete/:id",verifyAdmin, deleteSports)
//GET
router.get("/:id", getSports)
//GET ALL
router.get("/", getAllSports)

export default router