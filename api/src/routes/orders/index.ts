import { Router } from "express";
import {
  createOrder,
  getOrder,
  listOrders,
  updateOrder,
} from "./ordersController";
import { validateData } from "../../middlewares/validationMiddleware";
import {
  insertOrderWithItemsSchema,
  updateOrderSchema,
} from "../../db/ordersSchema";
import { verifyToken } from "../../middlewares/authMiddleware";

const router = Router();

router.post(
  "/",
  verifyToken,
  validateData(insertOrderWithItemsSchema),
  createOrder
);

router.get("/", verifyToken, listOrders);
router.get("/:id", verifyToken, getOrder);
router.put("/:id", verifyToken, validateData(updateOrderSchema), updateOrder);

export default router;
