import express, { Router } from "express";
import { verifyJwtToken } from "../utils/middleware/JWT";
import {
  createNewShopProduct,
  fetchShopProducts,
  purchaseShopProduct,
} from "./shop.controller";
export const ShopRoutes: Router = express.Router();

// api/shop/

ShopRoutes.post("/createNewShopProduct",verifyJwtToken, createNewShopProduct);
ShopRoutes.post("/fetchShopProducts",verifyJwtToken, fetchShopProducts);
ShopRoutes.post("/purchaseShopProduct",verifyJwtToken, purchaseShopProduct);
