import express from "express";
import { verifyCustomer } from "../utils/verifyToken.js";
import { createBookings, deleteBookings, getAllBookings, getBookings, updateBookings } from "../controllers/bookings.js";

const router = express.Router();

//CREATE 
router.post("/create",verifyCustomer, createBookings)
//UPDATE
router.put("/:id/update",verifyCustomer,  updateBookings)
//DELETE
router.delete("/delete/:id",verifyCustomer, deleteBookings)
//GET
router.get("/:id", getBookings)
//GET ALL
router.get("/", getAllBookings)

export default router