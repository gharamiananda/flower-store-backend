import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { ProductControllers } from "./product.controller";
import { ProductValidations } from "./product.validation";

const router = express.Router();

router.get("/", ProductControllers.getAllProducts);
router.get("/filter-options", ProductControllers.getAllFilterOptions);

router.post(
  "/",
  auth(),

  validateRequest(ProductValidations.createProductValidationSchema),
  ProductControllers.createProduct
);

router.get("/:slug", ProductControllers.getSingleProduct);

router.patch(
  "/:productId",
  //   validateRequest(AcademicSemesterValidations.),
  ProductControllers.updateProduct
);


router.delete(
  "/delete-products",
  //   validateRequest(AcademicSemesterValidations.),
  ProductControllers.deleteProducts
);

export const ProductRoutes = router;
