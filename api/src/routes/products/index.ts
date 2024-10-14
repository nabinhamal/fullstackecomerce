import { Router } from "express";
import {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productsController";
import { validateData } from "../../middlewares/validationMiddleware";

import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productsSchema";
import { verifySeller, verifyToken } from "../../middlewares/authMiddleware";

const router = Router();

router.get("/", listProducts);
router.get("/:id", getProductById);
router.post(
  "/",

  validateData(createProductSchema),
  createProduct
);
router.put(
  "/:id",

  validateData(updateProductSchema),
  updateProduct
);
router.delete("/:id", verifyToken, verifySeller, deleteProduct);

export default router;
