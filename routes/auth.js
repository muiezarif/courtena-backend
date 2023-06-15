import express from "express";
import { forgotAdminPassword, forgotCustomerPassword, forgotPartnerPassword, loginAdmin, loginCustomer, loginPartner, registerAdmin, registerCustomer, registerPartner, resetPartnerPassword } from "../controllers/auth.js";

const router = express.Router();

router.post("/register-admin",registerAdmin)
router.post("/register-partner",registerPartner)
router.post("/register-customer",registerCustomer)
router.post("/login-admin",loginAdmin)
router.post("/login-partner",loginPartner)
router.post("/login-customer",loginCustomer)
router.post("/forgot-password-admin",forgotAdminPassword)
router.post("/forgot-password-partner",forgotPartnerPassword)
router.post("/reset-password-partner",resetPartnerPassword)
router.post("/forgot-password-customer",forgotCustomerPassword)

export default router