import express from "express";
import { verifyCustomer } from "../utils/verifyToken.js";
import { getCustomerHomeData } from "../controllers/customer.js";

const router = express.Router();

//CREATE 
// router.post("/create",verifyCustomer, createSports)
//UPDATE
// router.put("/:id/update",verifyCustomer,  updateSports)
//DELETE
// router.delete("/delete/:id",verifyCustomer, deleteSports)
//GET
// router.get("/:id", getSports)
//GET ALL
// router.get("/", getAllSports)

router.get("/get-home-data",verifyCustomer,getCustomerHomeData)

export default router