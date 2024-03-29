import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { ProductRoutes } from "../modules/product/product.route";
import { SalesRoutes } from "../modules/sales/sales.route";

const router = Router();

const moduleRoutes = [
 
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/sales",
    route: SalesRoutes,
  },

  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
