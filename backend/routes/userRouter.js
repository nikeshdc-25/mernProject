import express from "express";
import {getUser, login, logout, signup} from "../controller/userController.js";
import { authCheck, checkAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/", authCheck, checkAdmin, getUser);
export default router;