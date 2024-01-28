import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { SalesControllers } from "./sales.controller";
import { SalesValidations } from "./sales.validation";

const router = express.Router();

router.get("/", SalesControllers.getAllSales);
router.post(
  "/",
  auth(),

  validateRequest(SalesValidations.createSalesValidationSchema),
  SalesControllers.createSales
);

router.get("/:SalesId", SalesControllers.getSingleSales);

router.patch(
  "/:SalesId",
  //   validateRequest(AcademicSemesterValidations.),
  SalesControllers.updateSales
);

export const SalesRoutes = router;
