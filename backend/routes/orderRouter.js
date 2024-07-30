import express from "express";
import {
  addOrder,
  getMyOrders,
  getOrderById,
  getOrders,
} from "../controller/orderController.js";
import { authCheck, checkAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get("/", authCheck, checkAdmin, getOrders);
router.get("/myorders", authCheck, getMyOrders);
router.post("/addorder", authCheck, addOrder);
router.get("/:id", authCheck, getOrderById);

export default router;
