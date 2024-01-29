"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const product_controller_1 = require("./product.controller");
const product_validation_1 = require("./product.validation");
const router = express_1.default.Router();
router.get("/", product_controller_1.ProductControllers.getAllProducts);
router.post("/", (0, auth_1.default)(), (0, validateRequest_1.default)(product_validation_1.ProductValidations.createProductValidationSchema), product_controller_1.ProductControllers.createProduct);
router.get("/:productId", product_controller_1.ProductControllers.getSingleProduct);
router.patch("/:productId", 
//   validateRequest(AcademicSemesterValidations.),
product_controller_1.ProductControllers.updateProduct);
exports.ProductRoutes = router;
